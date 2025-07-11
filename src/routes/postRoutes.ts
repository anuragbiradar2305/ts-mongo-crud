import express from 'express';
import {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost
} from '../controllers/postController';

const router = express.Router();

// Routes for Posts
router.post('/posts', createPost);
router.get('/posts', getPosts);
router.get('/posts/:id', getPost);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

export default router;
