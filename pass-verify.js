const bcrypt = require('bcrypt');

const hashVerify = async () => {
  const myPassword = 'admin123';
  const passHash =
    '$2b$10$94.DyF8cujBbI2bHcSIr5efIoexVH5hBdu6PiWNktswrkOVjlUzQ6';
  const isMatch = await bcrypt.compare(myPassword, passHash);
  console.log(isMatch);
};

hashVerify();
