import { v4 as uuid } from "uuid";

export const genre = [
    {
        _id: uuid(),
        genre: "Adventure"
    },
    {
        _id: uuid(),
        genre: "Autobiography"
    },
    {
        _id: uuid(),
        genre: "Children"
    },
    {
        _id: uuid(),
        genre: "Drama"
    },
    {
        _id: uuid(),
        genre: "Fantasy"
    },
    {
        _id: uuid(),
        genre: "Fiction"
    },
    {
        _id: uuid(),
        genre: "Philosophy"
    },
    {
        _id: uuid(),
        genre: "Romance"
    },
    {
        _id: uuid(),
        genre: "Self-help"
    },
    {
        _id: uuid(),
        genre: "Science"
    }
];


export const discount = [
    {
        _id: uuid(),
        discount: "50% & above"
    },
    {
        _id: uuid(),
        discount: "40% & above"
    },
    {
        _id: uuid(),
        discount: "30% & above"
    },
    {
        _id: uuid(),
        discount: "20% & above"
    },
    {
        _id: uuid(),
        discount: "10% & above"
    }
];


export const ratings = [
    {
        _id: uuid(),
        rating: [1, 2, 3, 4]
    },
    {
        _id: uuid(),
        rating: [1, 2, 3]
    },
    {
        _id: uuid(),
        rating: [1, 2]
    },
    {
        _id: uuid(),
        rating: [1]
    }
]


export const format = [
    {
        _id: uuid(),
        format: "Paperback"
    }, 
    {
        _id: uuid(),
        format: "Hard-cover"
    }
]


export const otherFilters = [
    {
        _id: uuid(),
        filter: "Bestsellers"
    },
    {
        _id: uuid(),
        filter: "In Stock"
    }
]