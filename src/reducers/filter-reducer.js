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
    filterByFormat: {
        paperback: false,
        hardcover: false
    },
    otherFilters: {
        bestSeller: false,
        inStock: false
    },
    sortBy: ""
}


const filterReducerFunction = (state, { type, payload }) => {
    const { filterByGenre, filterByFormat, otherFilters } = state;

    switch(type) {
        case "FILTER_BY_DISCOUNT":
            return({
                ...state,
                filterByDiscount: payload
            });

        case "FILTER_BY_RATING":
            return({
                ...state,
                filterByRating: payload
            });

        case "FORMAT_PAPERBACK": 
            return({
                ...state,
                filterByFormat: { ...filterByFormat, paperback: !filterByFormat.paperback }
            });

        case "FORMAT_HARDCOVER": 
            return({
                ...state,
                filterByFormat: { ...filterByFormat, hardcover: !filterByFormat.hardcover }
            });

        case "FILTER_BESTSELLER": 
            return({
                ...state,
                otherFilters: { ...otherFilters, bestSeller: !otherFilters.bestSeller }
            });

        case "FILTER_INSTOCK": 
            return({
                ...state,
                otherFilters: { ...otherFilters, inStock: !otherFilters.inStock }
            });
            
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