const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY0OTkxMDk3OCwiZXhwIjoxNjQ5OTE0NTc4fQ.vvrNBtxpjiss8DZ7KoILj3jyV3rfVG3rDryL_VDZIXE';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
