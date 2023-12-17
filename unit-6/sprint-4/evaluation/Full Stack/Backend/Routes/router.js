const express = require('express');
const Authentication = require('../Middleware/Authentication');
const {
  createPost,
  updatePost,
  deletePost,
} = require('./PostRoutes');

const router = express.Router();

router.use(Authentication);


router.post('/', createPost);
router.put('/:postId', updatePost);
router.delete('/:postId', deletePost);

module.exports = router;
