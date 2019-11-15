const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port : process.env.PORT,
    dbURI : process.env.dbURI,
    secret : process.env.SECRET
}