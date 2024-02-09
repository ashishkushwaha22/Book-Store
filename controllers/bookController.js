// 7. Import Models
const Book = require('../models/book');
const Author = require('../models/author');

// GET All Books
exports.book_list = async (req, res) => {
    try {
        const books = await Book.find().populate('author', 'name');
        res.json(books);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

// The line uses the populate() method to populate 
// the author field of each book with the corresponding author's name. 
// This is possible because there is a reference to the Author model in the author field of the Book model, and populate() helps in resolving this reference.

// GET by Name
exports.book_by_name = async (req, res) => {
    try {
        // console.log(req.params.title);
        const book = await Book.find({title: req.params.title}).populate('author','name');
        res.json(book);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

// POST create the data
exports.add_book = async (req, res) => {
    try {

        const book = new Book({
            title: req.body.title,
            genre: req.body.genre,
            author: req.body.author,
            image: req.file.filename
        });

        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

// PUT Update book
exports.update_bool = async (req, res) => {
    try {
        console.log("This is try");
    } catch (err) {
        console.log("this is catch")
    }
}

// Delete book
exports.delete_book = async (req, res) => {
    try {
        await Book.findOneAndDelete({title: req.params.title});
        res.json({message:'Book Deleted'});
    } catch (err) {
        res.status(500).json(err.message);
    }
};

// GET book by Author Name
exports.get_books_by_author_name = async (req, res) => {
    try {
        // Find the author by name
        const author = await Author.findOne({ name: req.params.name });
        if (!author) {
            return res.status(404).json({ message: 'Author not found' });
        }

        console.log(author._id);

        // Find books by the author's ID
        const books = await Book.find({ author: author._id });

        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}