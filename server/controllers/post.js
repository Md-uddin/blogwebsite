import PostMessage from "../models/post.js";
import router from "../routes/postroute.js";


//for get req 
export const getPost = async (req, res,) => {
    PostMessage.find()
        .then((result) => {
            res.status(200).json({
                allPost: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({errror:err})
    })
   
}

// for post req 
export const createPost = async (req, res) => {
    const post = req.body;

    const newpost = new PostMessage(post)

    try {
        await newpost.save();
        console.log('waha');
        res.status(200).json(newpost);
        // res.send(newpost)

    } catch (err) {
        console.log(err)
    }
}

// for delete req
export const deletePost = (req,res) => {
    PostMessage.remove({ title: req.params.title })
        .then(result => {
        res.status(200).json({message : "item removed"})
        })
        .catch(err => {
            res.status(404).json({
            error:err
        })
    })
}