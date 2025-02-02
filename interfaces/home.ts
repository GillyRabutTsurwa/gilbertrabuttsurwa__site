type image = {
    _type: string;
    _key: string;
    asset: {
        _ref: string;
        _type: string;
    };
};

export interface Home {
    _id: string;
    _type: string;
    header: {
        name: string;
        middleName: string;
        surname: string;
        portraits: Array<image>;
    };
}
