const express = require('express');
const router = express.Router();

const authController = require('./controllers/auth.controller');
const bookController = require('./controllers/book.controller');

router.use(authController);
router.use(bookController);

module.exports = router;