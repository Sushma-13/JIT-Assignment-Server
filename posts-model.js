const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    id: Number,
    text: String,
    datetime: String,
    upvotes: Number
});

module.exports = mongoose.model('post', PostSchema);