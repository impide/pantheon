var express = require('express');
const PostController = require('../controllers/PostController');
const postImageUpload = require('../middleware/multer.config');
var router = express.Router();

// Get all Posts
router.get('/', PostController.getPosts);

// Create a Post
router.post('/add-post', postImageUpload, PostController.addOnePost);

// Delete Post
router.delete('/:id', PostController.deleteOnePost);

module.exports = router;
