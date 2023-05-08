import mongoose from "mongoose";
const {Schema, model} = mongoose;

const blogSchema = new Schema(
    {
        title: String,
        category: String,
        isPublished: Boolean,
        content: String,
        tags:[String],
        comments: [{
            userName: String,
            userComment: String,
            likesCount: Number
        }]
    }
);

const Blog = model('Blog', blogSchema);
export default Blog;