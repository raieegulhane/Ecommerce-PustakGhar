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
        ratingOption: [1, 2, 3, 4],
        htmlFor: "4-star-and-up",
        value: "4"
    },
    {
        _id: uuid(),
        ratingOption: [1, 2, 3],
        htmlFor: "3-star-and-up",
        value: "3"
    },
    {
        _id: uuid(),
        ratingOption: [1, 2],
        htmlFor: "2-star-and-up",
        value: "2"
    },
    {
        _id: uuid(),
        ratingOption: [1],
        htmlFor: "1-star-and-up",
        value: "1"
    }
]


export const format = [
    {
        _id: uuid(),
        formatOption: "Paperback",
        htmlFor: "format-paperback",
        value: "paperback",
        actionType: "FORMAT_PAPERBACK"
    }, 
    {
        _id: uuid(),
        formatOption: "Hard-cover",
        htmlFor: "format-hardcover",
        value: "hardcover",
        actionType: "FORMAT_HARDCOVER"
    }
]


export const otherFiltersList = [
    {
        _id: uuid(),
        filterOption: "Bestsellers",
        htmlFor: "filter-bestSeller",
        value: "bestSeller",
        actionType: "FILTER_BESTSELLER"
    },
    {
        _id: uuid(),
        filterOption: "In Stock",
        htmlFor: "filter-inStock",
        value: "inStock",
        actionType: "FILTER_INSTOCK"
    }
]