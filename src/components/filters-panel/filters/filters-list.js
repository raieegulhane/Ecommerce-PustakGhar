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
        discountOption: "50% & above",
        htmlFor: "50-percent-and-above",
        value: "50"
    },
    {
        _id: uuid(),
        discountOption: "40% & above",
        htmlFor: "40-percent-and-above",
        value: "40"
    },
    {
        _id: uuid(),
        discountOption: "30% & above",
        htmlFor: "30-percent-and-above",
        value: "30"
    },
    {
        _id: uuid(),
        discountOption: "20% & above",
        htmlFor: "20-percent-and-above",
        value: "20"
    },
    {
        _id: uuid(),
        discountOption: "10% & above",
        htmlFor: "10-percent-and-above",
        value: "10"
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