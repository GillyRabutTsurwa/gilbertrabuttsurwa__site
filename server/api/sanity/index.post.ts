import type { H3Event } from "h3";
import Post from "~/models/posts";

export default defineEventHandler(async (event: H3Event) => {
    const headers = await getRequestHeaders(event);
    const post = await readBody(event);
    console.log("Sanity webhook reçu:");
    console.log(headers);
    if (headers["sanity-operation"] === "create") {
        console.log(`Adding new post with id: ${headers["sanity-document-id"]}`);
        await Post.create(post.body);
    } else if (headers["sanity-operation"] === "update") {
        console.log(`Updating body of post with id: ${headers["sanity-document-id"]}`);
        await Post.findByIdAndUpdate(headers["sanity-document-id"], { title: post.title, slug: post.slug.current, body: post.body });
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
