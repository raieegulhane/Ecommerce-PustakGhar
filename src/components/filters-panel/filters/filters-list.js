import { v4 as uuid } from "uuid";

export const genreList = [
    {
        _id: uuid(),
        genreOption: "Adventure",
        htmlFor: "genre-adventure",
        value: "adventure",
        actionType: "FILTER_BY_ADVENTURE"
    },
    {
        _id: uuid(),
        genreOption: "Autobiography",
        htmlFor: "genre-autobiography",
        value: "autobiography",
        actionType: "FILTER_BY_AUTOBIOGRAPHY"
    },
    {
        _id: uuid(),
        genreOption: "Children",
        htmlFor: "genre-children",
        value: "children",
        actionType: "FILTER_BY_CHILDREN" 
    },
    {
        _id: uuid(),
        genreOption: "Drama",
        htmlFor: "genre-drama",
        value: "drama",
        actionType: "FILTER_BY_DRAMA"
    },
    {
        _id: uuid(),
        genreOption: "Fantasy",
        htmlFor: "genre-fantasy",
        value: "fantasy",
        actionType: "FILTER_BY_FANTASY"
    },
    {
        _id: uuid(),
        genreOption: "Fiction",
        htmlFor: "genre-diction",
        value: "fiction",
        actionType: "FILTER_BY_FICTION"
    },
    {
        _id: uuid(),
        genreOption: "Philosophy",
        htmlFor: "genre-philosophy",
        value: "philosophy",
        actionType: "FILTER_BY_PHILOSOPHY" 
    },
    {
        _id: uuid(),
        genreOption: "Romance",
        htmlFor: "genre-romance",
        value: "romance",
        actionType: "FILTER_BY_ROMANCE"
    },
    {
        _id: uuid(),
        genreOption: "Self-help",
        htmlFor: "genre-self-help",
        value: "self-help",
        actionType: "FILTER_BY_SELF_HELP"
    },
    {
        _id: uuid(),
        genreOption: "Science",
        htmlFor: "genre-science",
        value: "science",
        actionType: "FILTER_BY_SCIENCE"
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