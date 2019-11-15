const express = require('express');
const router = express.Router();

const books = require('../../db').books;
const userBooks = require('../../db').userBooks;
const verifyToken = require('../middlewares/verifyToken');

router.get('/find', (req, res) => {
    const keyword = req.query.keyword;
    const category = req.query.category;

    const filetredBooks = books.filter((book) => {
        return (
            (category === "All" || category === book.genre) &&
            (keyword === "" || book.language === keyword || book.title.includes(category) ||
                book.country === keyword || book.author.includes(category) 
            )
        );
    });
    console.log(filetredBooks.length);
    res.status(200).json(filetredBooks);
});

router.get('/book', verifyToken({'roles':['admin', 'user']}), (req, res) => {
    const bookid = req.query.bookId;
    const book = books[bookid];
    res.status(200).json(book);
});

router.post('/mybooks', (req, res) => {
    const userId = req.body.userId;
    res.status(200).json(userBooks);
});

module.exports = router;