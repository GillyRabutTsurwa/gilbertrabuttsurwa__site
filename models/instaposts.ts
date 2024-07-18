import mongoose, { Schema } from "mongoose";

interface IPostInsta {
    insta_id: string;
    id: string;
    caption: string;
    permalink: string;
    media_type: string;
    media_url: string;
    username: string;
}

const instaPostSchema: Schema = new mongoose.Schema<IPostInsta>(
    {
        insta_id: {
            type: String,
            required: true,
            unique: true,
        },
        caption: {
            type: String,
            required: true,
        },
        permalink: {
            type: String,
            required: true,
        },
        media_type: {
            type: String,
            required: true,
        },
        media_url: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: false,
        },
    },
    {
        collection: "instaposts",
        bufferCommands: false,
        autoCreate: false,
    }
);

const InstaPost = mongoose.model<IPostInsta>("InstaPost", instaPostSchema);
export default InstaPost;
