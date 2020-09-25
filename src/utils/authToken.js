const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

exports.jwtSign = (data, time = '1d') => jwt.sign(data, secret, {expiresIn: time});

exports.jwtVerify = (token) => jwt.verify(token, secret);