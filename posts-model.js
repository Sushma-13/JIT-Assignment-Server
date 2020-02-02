const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    text: String,
    datetime: String,
    upvotes: Number
});

module.exports = mongoose.model('post', PostSchema);