import { PortableTextBlock } from "sanity";

type colour = {
    _type: string;
    alpha: number;
    hex: string;
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
        a: number;
        r: number;
        g: number;
        b: number;
    };
};

type image = {
    _type: string;
    asset: {
        _ref: string;
        _type: string;
    };
};

export interface Post {
    _id: string;
    _createdAt: string;
    _updatedAt: Date;
    _type: string;
    author: {
        _ref: string;
        _type: string;
    };
    body: Array<PortableTextBlock>;
    categories: Array<string>;
    colourPrimary?: colour;
    colourSecondary?: colour;
    mainImage: image;
    publishedAt: Date;
    slug: {
        _type: string;
        current: string;
    };
    thumbnail: image;
    title: string;
}
