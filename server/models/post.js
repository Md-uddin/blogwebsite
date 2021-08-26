import mongoose from 'mongoose'


const postSchema = new mongoose.Schema({
    title: String,
    author: String,
    description:String,
    createdAt: {
        type: Date,
        default: new Date()
    },
})
const PostMessage = mongoose.model("PostMessage",postSchema)

export default PostMessage;