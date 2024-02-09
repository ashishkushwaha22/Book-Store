// 2. Import Author Model
const Author = require('../models/author');

////// DEFINE CONTROLLERS (VIEWS) FOR APIs as EXPORTS MODULE //////

// GET all author
exports.author_list = async(req, res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

// GET author by name
exports.get_author_by_name = async (req, res) => {
    try {
        const author = await Author.findOne({ name: req.params.name });
        if (!author) {
            return res.status(404).json({ message: 'Author not found' });
        }
        res.json(author);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST create a new author
exports.add_author = async (req, res) => {
    try {
        const author = new Author({
            name: req.body.name
        });

        // console.log(author);

        const newAuthor = await author.save();
        res.status(201).json(newAuthor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// PUT update an existing author
exports.edit_author = async (req, res) => {
    try {
        const author = await Author.findOneAndUpdate({name: req.params.name}, {name: req.body.name}, { new: true }); // (condition query, Update data)
        res.json(author);
    } catch (err) {
        res.status(500).json({message: "Update failed"});
        console.log(err.message);
    }
};

// DELETE delete an author
exports.delete_author = async (req, res) => {
    try {
        const author = await Author.findOne({ name: req.params.name });
        if (!author) {
            return res.status(404).json({ message: 'Author not found' });
        }
        // console.log(author);
        await Author.deleteOne({name: req.params.name});
        res.json({message:'Author deleted'});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

