const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({

    username: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: String, required: true },
    likes: { type: Number, default: 0 },
    comments: { type: String } // Use an array to store comments
});

const BlogModel = mongoose.model("Blog", blogPostSchema);

module.exports = BlogModel;
