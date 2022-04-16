const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { config } = require('../config/config');

const UserService = require('./user.service');
const service = new UserService();

class AuthService {
  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized();
    }
    delete user.dataValues.password;
    delete user.dataValues.recoveryToken;
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, config.jwtSecret);
    return {
      user,
      token,
    };
  }

  async sendRecovery(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const payload = { sub: user.id };
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '15min' });
    const link = `https://myfrontend.com/recovery?token=${token}`;
    await service.update(user.id, { recoveryToken: token });

    const mail = {
      from: 'pepito@mail.com',
      to: `${user.email}`,
      subject: 'Email para recuperar contraseña',
      html: `<h2>Ingrese a este link => ${link}</h2>`,
    };
    const rta = await this.sendEmail(mail);
    return rta;
  }

  async changePassword(token, newPassword) {
    try {
      const payload = jwt.verify(token, config.jwtSecret);
      const user = await service.findOne(payload.sub);
      if (user.recoveryToken !== token) {
        throw boom.unauthorized();
      }
      const hash = await bcrypt.hash(newPassword, 10);
      await service.update(user.id, { recoveryToken: null, password: hash });
      return { message: 'password changed' };
    } catch (error) {
      throw boom.unauthorized();
    }
  }

  async sendEmail(infoMail) {
    let testAccount = await nodemailer.createTestAccount();

    const userEmail = 'dle6t4oxaru7o2os@ethereal.email';
    const pass = 'Vsth66zj6pSq5nXPHJ';

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      secure: false,
      port: 587,
      auth: {
        user: userEmail,
        pass: pass,
      },
    });

    await transporter.sendMail(infoMail);
    return { message: 'email sent' };
  }
}

module.exports = AuthService;
