const express = require('express');
const auth = require('../Middleware/auth');
const BlogModel = require('../Model/blogModel');

const blogRouter = express.Router();


blogRouter.post('/blogs', async (req, res) => {
    try {
        const newBlog = new BlogModel({ ...req.body });
        await newBlog.save();
        res.status(201).json({ msg: 'Blog post created successfully' });
    } catch (error) {
        console.error('Error creating blog post:', error);
        res.status(500).json({ err: 'An error occurred while creating the blog post' });
    }
});


blogRouter.get('/blogs', auth, async (req, res) => {
    try {
        const blogs = await BlogModel.find();
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error getting blogs:', error);
        res.status(500).json({ err: 'An error occurred while fetching blogs' });
    }
});


blogRouter.get('/blogs/search', auth, async (req, res) => {
    try {
        const { title, category } = req.query;
        let query = {};

        if (title) {
            query.title = title;
        }
        if (category) {
            query.category = category;
        }

        const blogs = await BlogModel.find(query);
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error searching blogs:', error);
        res.status(500).json({ err: 'An error occurred while searching blogs' });
    }
});


blogRouter.get('/blogs/sort', auth, async (req, res) => {
    try {
        const sort = req.query.sort;
        const order = req.query.order === 'asc' ? 1 : -1;
        const blogs = await BlogModel.find().sort({ [sort]: order });
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error sorting blogs:', error);
        res.status(500).json({ err: 'An error occurred while fetching blogs' });
    }
});


blogRouter.patch('/blogs/:id', auth, async (req, res) => {
    try {
        const blogId = req.params.id;
        const updatedBlog = await BlogModel.findByIdAndUpdate(blogId, req.body, { new: true });
        res.status(200).json(updatedBlog);
    } catch (error) {
        console.error('Error updating blog:', error);
        res.status(500).json({ err: 'An error occurred while updating the blog' });
    }
});


blogRouter.delete('/blogs/:id', auth, async (req, res) => {
    try {
        const blogId = req.params.id;
        await BlogModel.findByIdAndDelete(blogId);
        res.status(200).json({ msg: 'Blog deleted successfully' });
    } catch (error) {
        console.error('Error deleting blog:', error);
        res.status(500).json({ err: 'An error occurred while deleting the blog' });
    }
});


blogRouter.patch('/blogs/:id/like', auth, async (req, res) => {
    try {
        const blogId = req.params.id;
        const updatedBlog = await BlogModel.findByIdAndUpdate(blogId, { $inc: { likes: 1 } }, { new: true });
        res.status(200).json(updatedBlog);
    } catch (error) {
        console.error('Error liking blog:', error);
        res.status(500).json({ err: 'An error occurred while liking the blog' });
    }
});


blogRouter.patch('/blogs/:id/comment', auth, async (req, res) => {
    try {
        const blogId = req.params.id;
        const newComment = req.body.comment;
        const updatedBlog = await BlogModel.findByIdAndUpdate(blogId, { $push: { comments: newComment } }, { new: true });
        res.status(200).json(updatedBlog);
    } catch (error) {
        console.error('Error commenting on blog:', error);
        res.status(500).json({ err: 'An error occurred while commenting on the blog' });
    }
});

module.exports = blogRouter;
