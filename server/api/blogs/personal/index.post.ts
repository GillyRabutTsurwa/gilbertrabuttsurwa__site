import type { H3Event } from "h3";
import Post from "@/models/posts";

export default defineEventHandler(async (event: H3Event) => {
    const body = await readBody(event); //NOTE: data coming from client side
    console.log("POSTS SETTINGS", body);

    body.forEach(async (currentPost: any) => {
        //NOTE: on cherche si le poste que l'on retrouve du client existe déjà dans la base de données en observant les IDs
        const duplicatePost = await Post.findOne({ _id: currentPost._id });

        if (duplicatePost) return; //NOTE: si le poste venant de client existe déjà dans la base de données, arrête l'operation de la fonction

        // NOTE: sinon, ajouter le nouveau poste dans la base de données
        const post = new Post({
            _id: currentPost._id,
            title: currentPost.title,
            _type: currentPost._type,
            _createdAt: currentPost._createdAt,
            _updatedAt: currentPost._updatedAt,
            publishedAt: currentPost._publishedAt,
            author: currentPost.author,
            categories: currentPost.categories,
            slug: currentPost.slug,
        });

        await Post.create(post);
    });
});
