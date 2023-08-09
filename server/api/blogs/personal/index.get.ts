import Post from "@/models/posts";

export default defineEventHandler(async () => {
    const posts = await Post.find();

    return {
        posts: posts,
    };
});
