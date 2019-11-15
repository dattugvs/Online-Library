const jwt = require('../../services/jwt.service');

module.exports = (data) => {
    return (req, res, next) => {
        const bearerHeader = req.headers['authorization'];
        if(typeof bearerHeader !== 'undefined')
        {
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
    
            const tokenData = jwt.verifyToken(bearerToken);
            console.log(tokenData);
            if(tokenData && tokenData.user)
            {
                if(data.roles.indexOf(tokenData.user.role) === -1)
                {
                    res.sendStatus(401); // un authorized
                }
                else
                {
                    next(); // authorized
                }
            }
            else
            {
                res.sendStatus(403); // no use
            }
        }
        else
        {
            res.sendStatus(403); // no token
        }
    }
}