import { v4 as uuid } from "uuid";

export const sortingList = [
    {
        _id: uuid(),
        sortCriteria: "Popularity",
        value: "popularity",
        actionType: "POPULARITY"
    },
    {
        _id: uuid(),
        sortCriteria: "Price: High to low",
        value: "price-high-to-low",
        actionType: "PRICE_HIGH_TO_LOW"
    },
    {
        _id: uuid(),
        sortCriteria: "Price: Low to high",
        value: "price-low-to-high",
        actionType: "PRICE_LOW_TO_HIGH"
    }
];