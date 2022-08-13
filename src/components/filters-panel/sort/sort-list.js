import { v4 as uuid } from "uuid";

export const sortingList = [
    {
        _id: uuid(),
        sortBy: "Popularity"
    },
    {
        _id: uuid(),
        sortBy: "Price: High to low"
    },
    {
        _id: uuid(),
        sortBy: "Price: Low to high"
    }
];