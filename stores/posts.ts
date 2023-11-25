import { defineStore } from "pinia";
import { Post } from "~/interfaces/post";

interface PostState {
    posts: Array<Post>;
    techPosts: Array<Post>;
    filteredPosts: Array<Post>;
    filteredTechPosts: Array<Post>;
}

export const usePostsStore = defineStore("posts", {
    state: (): PostState => {
        return {
            posts: [],
            techPosts: [],
            filteredPosts: [],
            filteredTechPosts: [],
        };
    },
});
