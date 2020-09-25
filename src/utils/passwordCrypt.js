const bcrypt = require('bcryptjs');

exports.encrypt = (password) => bcrypt.hash(password, 10);

exports.verifyCrypt = (newPassword, oldPassword) => bcrypt.compare(newPassword, oldPassword);