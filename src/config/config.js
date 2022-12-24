const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HTTP: process.env.HTTP || 'http://localhost:3000',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://admin:admin@cluster0.wwcjllg.mongodb.net/BuscaTuProfeTest',
    JWT_SECRET: process.env.JWT_SECRET || 123456,
    SALT: process.env.SALT || 10
}