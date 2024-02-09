// 8. Import EXPRESS, ROUTER from EXPRESS and CONTROLLER 
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const upload = require('../middlewares/upload');

///// DEFINE API ROUTES /////

// GET All
router.get('/', bookController.book_list);

// GET Book by Title
router.get('/:title', bookController.book_by_name);

// POST new Book
router.post('/', upload.single('image'), bookController.add_book);

// DELETE Book
router.delete('/:title', bookController.delete_book);

// GET All books by Author Name
router.get('/getByAuthor/:name', bookController.get_books_by_author_name);

// 9. export the router, it will be used in index.json
module.exports = router;