import express from 'express';
const router = express.Router();
import { getPost, createPost,deletePost } from '../controllers/post.js'

//get post 
router.get('/', getPost)

//addpost


router.post('/addpost', createPost);

//deletepost
router.delete('/:title',deletePost)

export default router;
