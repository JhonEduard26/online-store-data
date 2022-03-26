const { models } = require('../libs/sequelize');

class UserService {
  async create(data) {
    const rta = '';
    return rta;
  }

  async find() {
    const rta = models.User.findAll();
    return rta;
  }

  async findOne(id) {
    const rta = '';
    return rta;
  }

  async update(id, changes) {
    const rta = '';
    return rta;
  }

  async delete(id) {
    const rta = '';
    return rta;
  }
}

module.exports = UserService;
