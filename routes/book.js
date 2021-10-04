let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Book Model
let Book = require('../models/book');

/* GET Route for the Book List page - READ OPeration */
router.get('/', (req, res, next) => {
    
    // const newBook = new Book({
    //     "name": "Text Sample 1 ",
    //     "author": "Text Sample 1 ",
    //     "published": "Text Sample 1 ",
    //     "description": "Text Sample 1 ",
    //     "price": 123
    // });
    // newBook.save();

    Book.find((err, bookList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(bookList);
            res.render('book', 
            {
                title: 'Book List', 
                BookList: bookList
            });            
        }
    });
});

module.exports = router;