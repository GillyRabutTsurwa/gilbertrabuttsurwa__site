import type { H3Event } from "h3";
import Post, { type IPost } from "~/models/posts";

const createPost = async (post: IPost) => {
    await Post.create({
        _id: post._id,
        title: post.title,
        _type: post._type,
        _createdAt: post._createdAt,
        _updatedAt: post._updatedAt,
        publishedAt: post.publishedAt,
        author: post.author,
        excerpt: post.excerpt,
        mainImage: post.mainImage,
        thumbnail: post.thumbnail,
        postGenre: post.postGenre,
        body: post.body,
        categories: post.categories,
        slug: post.slug,
        colourPrimary: post.colourPrimary,
        colourSecondary: post.colourSecondary,
    });
};

const updatePost = async (post: IPost, postID?: IPost["_id"]) => {
    await Post.findByIdAndUpdate(postID, {
        title: post.title,
        _type: post._type,
        _updatedAt: post._updatedAt,
        publishedAt: post.publishedAt,
        excerpt: post.excerpt,
        mainImage: post.mainImage,
        thumbnail: post.thumbnail,
        postGenre: post.postGenre,
        body: post.body,
        categories: post.categories,
        slug: post.slug,
        colourPrimary: post.colourPrimary,
        colourSecondary: post.colourSecondary,
    });
};

export default defineEventHandler(async (event: H3Event) => {
    const headers = await getRequestHeaders(event);
    const post = await readBody(event);
    console.log("Sanity webhook reçu:");
    console.log(headers);
    if (headers["sanity-operation"] === "create") {
        await Post.findByIdAndDelete(headers["sanity-document-id"]);
        console.log(`Adding new post with id: ${headers["sanity-document-id"]}`);
        await createPost(post);
    } else if (headers["sanity-operation"] === "update") {
        const existingPost = await Post.findById(headers["sanity-document-id"]);
        if (!existingPost) {
            await createPost(post);
        } else {
            console.log(`Updating body of post with id: ${headers["sanity-document-id"]}`);
            await updatePost(post, headers["sanity-document-id"]);
        }
    } else if (headers["sanity-operation"] === "delete") {
        console.log(`Deleting post with id: ${headers["sanity-document-id"]}`);
        await Post.findByIdAndDelete(headers["sanity-document-id"]);
    } else {
        console.error("On peut pas le faire");
    }
    console.log("======================================");
    console.log("======================================");
    console.log("======================================");
    console.log(post);
});
