import groq from "groq";
//NOTE: il n'y a quand-même une chose là-dedans, donc c'est pas grave pour chercher le premier valeur
export const home: string = groq`*[_type == "home"][0] {
    _id,
    header,
    _type
}`;

export const posts = (genre?: "personal" | "tech") => {
  if (genre !== undefined) {
    return groq`*[_type == "post" && postGenre == "${genre}"] {
            _id,
            title,
            slug,
            author->,
            postGenre,
            categories,
            thumbnail,
            mainImage,
            publishedAt,
            _updatedAt,
            // "slug": slug.current,
            excerpt,
            body,
            colourPrimary,
            colourSecondary,
            _type
        }`;
  }
  //NOTE: else return all posts
  return groq`*[_type == "post"] {
        _id,
        title,
        slug,
        author->,
        postGenre,
        categories,
        thumbnail,
        mainImage,
        publishedAt,
        _updatedAt,
        // "slug": slug.current,
        excerpt,
        body,
        colourPrimary,
            colourSecondary,
        _type
    }`;
};

export const post = (url: string) => {
  return groq`*[_type == "post" && slug.current == "${url}"][0] {
        _id,
        title,
        slug,
        categories,
        author->,
        postGenre,
        thumbnail,
        mainImage,
        publishedAt,
        _updatedAt,
        // "slug": slug.current,
        excerpt,
        body,
        colourPrimary,
            colourSecondary,
        _type
    }`;
};

// NOTE: redundant but pour le moment ça va

export const product: string = groq`*[_type == "product"]`;

const postDebug: string = groq`*[_type == "post"] {
    _id,
    slug,
    author->,
    postGenre,
    categories
    thumbnail,
    mainImage,
    publishedAt,
    _updatedAt,
    _type
}`;
