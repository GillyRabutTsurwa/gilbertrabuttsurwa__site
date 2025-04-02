import type { PortableTextBlock, Slug, ImageAsset, HexColor } from "sanity";

type colour = {
    _type: string;
    alpha: number;
    hex: HexColor;
    hsl: {
        _type: string;
        a: number;
        h: number;
        l: number;
        s: number;
    };
    hsv: {
        _type: string;
        a: number;
        h: number;
        s: number;
        v: number;
    };
    rgb: {
        _type: string;
        r: number;
        g: number;
        b: number;
        a: number;
    };
};

type author = {
    _id: string;
    _type: string;
    name: string;
    slug: Slug;
    _createdAt: Date;
    _updatedAt: Date;
    bio: Array<PortableTextBlock>;
    image: ImageAsset;
};

export interface Post {
    _id: string;
    _createdAt: string;
    _updatedAt: Date;
    _type: string;
    author: author;
    postGenre: string;
    excerpt: string;
    body: Array<PortableTextBlock>;
    categories: Array<string>;
    colourPrimary?: colour;
    colourSecondary?: colour;
    mainImage: ImageAsset;
    publishedAt: Date;
    slug: Slug;
    thumbnail: ImageAsset;
    title: string;
}
