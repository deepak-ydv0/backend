import mongoose ,{Schema} from "mongoose";
import mongooseAggregatePaginnate from "mongoose-aggregate-paginate-v2"

const videoSchema = new Schema(
    {
        videoFile:{
            type: String,
            required: true,
        },
        thambnail:{
            type: String,
            required: true,
        },
        title:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        duration:{
             type: Number, //cludnery
            required: true,
        },
        viwes:{
            type: String,
            default: 0
        },
        isPublished:{
            type: Boolean,
            default: true
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {timestamps: true}
)


videoSchema.plugin(mongooseAggregatePaginnate)

export const Video = mongoose.model("Video",videoSchema)