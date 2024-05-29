import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    video:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    },
    content:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    },
    tweete:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweete"
    },
    likedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps:true})

export const Like = mongoose.model("Like",likeSchema)