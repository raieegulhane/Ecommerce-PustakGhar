const initialFilterValues = {
    filterByGenre: {
        adventure: false,
        autobiography: false,
        children: false,
        drama: false, 
        fantasy: false,
        fiction: false,
        philosophy: false,
        romance: false,
        self_help: false,
        science: false
    },
    filterByPrice: "",
    filterByDiscount: "",
    filterByRating: "",
    filterByFormat: "",
    otherFilters: {
        bestseller: false,
        isStock: false
    },
    sortBy: ""
}


const filterReducerFunction = (state, { type, payload }) => {
    switch(type) {
        case "FILTER_BY_DISCOUNT":
            return({
                ...state,
                filterByDiscount: payload
            })

        case "POPULARITY": 
            return({
                ...state,
                sortBy: "POPULARITY"
            });

        case "PRICE_HIGH_TO_LOW":
            return({
                ...state,
                sortBy: "PRICE_HIGH_TO_LOW"
            });

        case "PRICE_LOW_TO_HIGH":
            return({
                ...state,
                sortBy: "PRICE_LOW_TO_HIGH"
            });
    
        default: 
            return { initialFilterValues }
    }
}

export { initialFilterValues, filterReducerFunction }