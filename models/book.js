const mongoose = require('mongoose');

// 6. Book Schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: String,
    author: { //Foreign key to Author model
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    },
    image: String
});

// Export model of Book Schema
module.exports = mongoose.model('Book', bookSchema);