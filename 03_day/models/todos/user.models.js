import mongoose from "mongoose"

const usreSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        paqssword:{
            type: String,
            required: [true, "Password is required"],
            min:[8,'Min length is 8'],
            max:[12,"Max length is 12"],
            
        },
        


    },{timestamps: true} 
)


export const User = mongoose.model("User",usreSchema)