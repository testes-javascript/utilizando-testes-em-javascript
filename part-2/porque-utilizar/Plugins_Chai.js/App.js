const fs = require('fs');

let users = JSON.parse(fs.readFileSync('user.json', 'utf8'));

let sum = (value1, value2) => {
  return value1 + value2;
};

module.exports = { sum, users };
