const express = require('express');
const router = express.Router();

const jwt = require('../../services/jwt.service');

router.post('/signup', (req, res) => {
    res.status(200).json({
        message : "Account Created Successfully !!"
    });
});

router.get('/', (req, res) => {
    res.status(200).send("Hurray home page !!");
});

router.post('/signin', (req, res) => {
    const {email, password} = req.body;
    if((email === "user@user" && password === "user") || (email === "admin@admin" && password === "admin"))
    {
        const user = {
            email : email,
            role  : password
        };
        const token = jwt.createToken(user);
        res.status(200).json({
            email : email,
            role : password,
            access_token:token
        });
    }
    else
    {
        res.status(401).json(null);
    }
});

module.exports = router;