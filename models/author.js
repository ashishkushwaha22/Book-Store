const mongoose = require('mongoose')

// 1: Author Schema
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

// Export model of Author Schema
module.exports = mongoose.model('Author', authorSchema);