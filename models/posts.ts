import mongoose, { Schema } from "mongoose";

interface IPost {
    _id: string;
    title: string;
    _type: string;
    _createdAt: string;
    _updatedAt: string;
    publishedAt: string;
    author: { _ref: string };
    body: Array<object>;
    categories: Array<string>;
    slug: { current: string; _type: string };
    colourPrimary: Object;
    colourSecondary: Object;
}

const PostSchema: Schema = new mongoose.Schema<IPost>(
    {
        _id: { type: String, required: true, unique: true },
        title: { type: String, required: true },
        _type: { type: String, required: false },
        _createdAt: { type: String, required: false },
        _updatedAt: { type: String, required: false },
        publishedAt: { type: String, required: false },
        author: { type: Object },
        body: { type: [Object] },
        categories: { type: [String] },
        slug: { type: Object },
        colourPrimary: { type: Object },
        colourSecondary: { type: Object },
    },
    {
        collection: "posts",
        // NOTE: attempt to FIX buffer timeout error in production
        bufferCommands: false,
        autoCreate: false,
    }
);

const Post = mongoose.model<IPost>("Post", PostSchema);
export default Post;
