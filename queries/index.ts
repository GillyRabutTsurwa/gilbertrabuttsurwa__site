//NOTE: il n'y a quand-même une chose là-dedans, donc c'est pas grave pour chercher le premier valeur
export const home: string = groq`*[_type == "home"][0] {
    _id,
    header,
    _type
}`;
export const post: string = groq`*[_type == "post"] {
    _id,
    title,
    slug,
    author,
    postGenre,
    thumbnail,
    mainImage,
    publishedAt,
    _updatedAt,
    // "slug": slug.current,
    body,
    _type
}`;

// NOTE: redundant but pour le moment ça va

export const product: string = groq`*[_type == "product"]`;

const postDebug: string = groq`*[_type == "post"] {
    _id,
    slug,
    author,
    postGenre,
    thumbnail,
    mainImage,
    publishedAt,
    _updatedAt,
    _type
}`;
