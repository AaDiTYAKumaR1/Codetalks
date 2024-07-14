import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    imageurl:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    comment:{
        type:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment',
        }],
    },
    likes:{
        type:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
        }],
        default:[],
    }
})
const PostBlog=mongoose.model('PostBlog',postSchema);
export default PostBlog;