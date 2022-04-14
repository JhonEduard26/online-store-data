const jwt = require('jsonwebtoken');

const secret = 'myCat';

const payload = {
  sub: 1,
  role: 'customer',
};

const jwtConfig = {
  expiresIn: '1h',
};

function signToken(payload, secret, jwtConfig) {
  return jwt.sign(payload, secret, jwtConfig);
}

const token = signToken(payload, secret, jwtConfig);
console.log(token);
