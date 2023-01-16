export interface Product {
    name: string;
    price: number;
    quantity: number;
    type: string;
    _id: string;
};

export interface Article {
    name: string,
    type: string,
    quantity: number,
    price: number
};

export interface Menu {
    name: string,
    articles: Article[],
    price: number
};