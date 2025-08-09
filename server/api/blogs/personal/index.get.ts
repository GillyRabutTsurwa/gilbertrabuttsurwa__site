import { createClient } from "@sanity/client";
import Post from "@/models/posts";
import { posts } from "~/queries";

const config = useRuntimeConfig();
const client = createClient({ projectId: config.public.sanity.projectId, dataset: "production", apiVersion: "2022-01-12", useCdn: true });

export default defineEventHandler(async (): Promise<any[]> => {
    const myPosts = { database: await Post.find(), server: await client.fetch(posts("personal")) };

    myPosts.server.forEach(async (currentPost: any) => {
        if (myPosts.database.length < myPosts.server.length) {
            const duplicatePost = await Post.findOne({ _id: currentPost._id });
            if (duplicatePost) return;

            const post = new Post({
                _id: currentPost._id,
                title: currentPost.title,
                _type: currentPost._type,
                _createdAt: currentPost._createdAt,
                _updatedAt: currentPost._updatedAt,
                publishedAt: currentPost._publishedAt,
                author: currentPost.author,
                body: currentPost.body,
                categories: currentPost.categories,
                slug: currentPost.slug,
                colourPrimary: currentPost.colourPrimary,
                colourSecondary: currentPost.colourSecondary,
            });
            await Post.create(post);
        }
    });

    return myPosts.database || myPosts.server;
});
