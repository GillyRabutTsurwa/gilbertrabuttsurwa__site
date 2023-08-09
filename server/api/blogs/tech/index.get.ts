import { client } from "~/sanity.client";
import groq from "groq";

export async function fetchPosts() {
    const query = groq`*[_type == "tech-post"]`;
    const posts = await client.fetch(query);
    return posts;
}

export default defineEventHandler(() => {
    return fetchPosts();
});
