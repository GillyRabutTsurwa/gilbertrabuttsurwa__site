import { defineStore } from "pinia";
import { client } from "~/sanity.client.vite";
import groq from "groq";

export const usePostsStore = defineStore("posts", {
    state: () => {
        return {
            posts: [],
            techPosts: [],
            filteredPosts: [],
            filteredTechPosts: [],
        };
    },
    actions: {
        async fetchPosts() {
            const query = groq`*[_type == "personal-post"]`;
            const posts = await client.fetch(query);

            this.posts = posts;
            this.filteredPosts = posts; //NOTE; filtered posts will initially show all the posts
            console.log(this.posts);
        },
        async filterPosts(category) {
            await this.fetchPosts();
            this.filteredPosts = this.posts.filter((currentPost) => currentPost.categories.includes(category));
        },
        // REFACTOR
        async fetchTechPosts() {
            const query = groq`*[_type == "tech-post"]`;
            const posts = await client.fetch(query);

            this.techPosts = posts;
            this.filteredTechPosts = posts; //NOTE; filtered posts will initially show all the posts
            console.log(this.techPosts);
        },
        async filterTechPosts(category) {
            await this.fetchTechPosts();
            this.filteredTechPosts = this.techPosts.filter((currentPost) => currentPost.categories.includes(category));
        },
    },
});
