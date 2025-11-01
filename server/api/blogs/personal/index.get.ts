import Post from "~~/models/posts";
import type { PostInt } from "~~/interfaces/post";

export default defineEventHandler(async (): Promise<PostInt[]> => {
    const posts = await Post.find();
    return posts;
});
