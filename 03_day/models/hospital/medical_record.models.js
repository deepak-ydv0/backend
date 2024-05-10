import mongoose from "mongoose";

const mediicalSchema = new mongoose.Schema(
    {

    },{timestamps:true}
)
export const Medical = mongoose.model("Medical",mediicalSchema)