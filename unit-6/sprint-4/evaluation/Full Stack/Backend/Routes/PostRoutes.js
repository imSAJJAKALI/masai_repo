const PostModel = require('../Model/PostModel');

const getPosts = async (req, res) => {
  try {
    const { device } = req.query;
    const filter = device ? { device } : {};

    const posts = await PostModel.find({ ...filter, user: req.userId });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get posts' });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, body, device } = req.body;

    const post = new PostModel({ title, body, device, user: req.userId });
    await post.save();

    res.status(201).json({ post });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
};

const updatePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { title, body, device } = req.body;

    const post = await PostModel.findOneAndUpdate(
      { _id: postId, user: req.userId },
      { title, body, device },
      { new: true }
    );

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json({ post });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update post' });
  }
};

const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;

    const deletedPost = await PostModel.findOneAndDelete({
      _id: postId,
      user: req.userId,
    });

    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete post' });
  }
};

module.exports = { getPosts, createPost, updatePost, deletePost };
