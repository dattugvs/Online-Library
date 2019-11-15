const jwt = require('jsonwebtoken');
const {secret} = require('../config');

createToken = (user) => {
    const token = jwt.sign({user:user}, secret, {expiresIn : '60000'});
    return token;
}

verifyToken = (token) => {
    try {
        var tokenData = jwt.verify(token, secret);
        return tokenData;
    }
    catch(err) {
        return null;
    }
}

module.exports = {
    verifyToken : verifyToken,
    createToken : createToken
}