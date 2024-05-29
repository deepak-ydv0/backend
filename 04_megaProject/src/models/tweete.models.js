import mongoose from "mongoose";

const tweeteSchema =new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps: true})

export const Tweete = mongoose.model("Tweete",tweeteSchema)