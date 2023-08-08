import mongoose, { Schema } from "mongoose";

interface IUser {
    email: string;
    username: string;
    password: string;
    isSubscribed: boolean;
}

const UserSchema: Schema = new mongoose.Schema<IUser>(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: false,
        },
        isSubscribed: {
            type: Boolean,
            required: false,
        },
    },
    {
        collection: "users",
    }
);

const User = mongoose.model<IUser>("User", UserSchema);
export default User;
