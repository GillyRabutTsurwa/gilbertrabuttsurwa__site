import { PortableTextBlock } from "sanity";

type image = {
    _type: string;
    asset: {
        _ref: string;
        _type: string;
    };
};

export interface Product {
    _id: string;
    _createdAt: string;
    _updatedAt: Date;
    _type: string;
    currency: string;
    price: number;
    description: Array<PortableTextBlock>;
    mainImage: image;
    publishedAt: Date;
    slug: {
        _type: string;
        current: string;
    };
    name: string;
}
