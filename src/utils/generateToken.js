const crypto = require('crypto');

function generateToken() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  let counter = 0;
  while (counter < 16) {
    const randomIndex = crypto.randomBytes(1).readUInt8() % characters.length;
    token += characters[randomIndex];
    counter += 1;
  }
  return token;
}

module.exports = generateToken;