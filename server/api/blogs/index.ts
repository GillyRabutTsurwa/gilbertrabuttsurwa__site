// import { client } from "~/sanity.client";
// import groq from "groq";

// export async function fetchPosts() {
//     const query = groq`*[_type == "personal-post"]`;
//     const posts = await client.fetch(query);
//     return posts;
// }

// fetchPosts();

export default defineEventHandler(() => {
    return {
        message: "salut",
    };
});
