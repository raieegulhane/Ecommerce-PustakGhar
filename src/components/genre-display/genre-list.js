import { v4 as uuid } from "uuid";
import Adventure from "../../assets/images/adventure.jpg"
import Children from "../../assets/images/children.jpg"
import Drama from "../../assets/images/drama.jpg"
import Fantasy from "../../assets/images/fantasy.jpg"
import Romance from "../../assets/images/romance.jpg"
import Science from "../../assets/images/science.jpg"


export const genreDisplayList = [
    {
        _id: uuid(),
        genreName: "Adventure",
        genreImg: Adventure,
        alt: "genre-adventure",
        actionType: "FILTER_BY_ADVENTURE"
    },
    {
        _id: uuid(),
        genreName: "Fantasy",
        genreImg: Fantasy,
        alt: "genre-fantasy",
        actionType: "FILTER_BY_FANTASY"
    },
    {
        _id: uuid(),
        genreName: "Romance",
        genreImg: Romance,
        alt: "genre-romance",
        actionType: "FILTER_BY_ROMANCE"
    },
    {
        _id: uuid(),
        genreName: "Science",
        genreImg: Science,
        alt: "genre-science",
        actionType: "FILTER_BY_SCIENCE"
    },
    {
        _id: uuid(),
        genreName: "Drama",
        genreImg: Drama,
        alt: "genre-drama",
        actionType: "FILTER_BY_DRAMA"
    }, 
    {
        _id: uuid(),
        genreName: "Children",
        genreImg: Children,
        alt: "genre-children",
        actionType: "FILTER_BY_CHILDREN"
    }
];