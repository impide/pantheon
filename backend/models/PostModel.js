const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    'content': { type: [Boolean|String], required: true },
    'path': { type: String, required: true },
    'creator': { type: String, required: true },
    'createdAt': { type: Date, default: Date.now() }
})

module.exports = mongoose.model('Post', PostSchema)