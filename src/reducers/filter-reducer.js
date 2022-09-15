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
    filterByPrice: 1700,
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

        // genre
        case "FILTER_BY_ADVENTURE":
            return({
                ...state,
                filterByGenre: { ...filterByGenre, adventure: !filterByGenre.adventure }
            });

        case "FILTER_BY_AUTOBIOGRAPHY":
            return({
                ...state,
                filterByGenre: { ...filterByGenre, autobiography: !filterByGenre.autobiography }
            });

        case "FILTER_BY_CHILDREN":
            return({
                ...state,
                filterByGenre: { ...filterByGenre, children: !filterByGenre.children }
            });

        case "FILTER_BY_DRAMA":
            return({
                ...state,
                filterByGenre: { ...filterByGenre, drama: !filterByGenre.drama }
            });

        case "FILTER_BY_FANTASY":
            return({
                ...state,
                filterByGenre: { ...filterByGenre, fantasy: !filterByGenre.fantasy }
            });

        case "FILTER_BY_FICTION":
            return({
                ...state,
                filterByGenre: { ...filterByGenre, fiction: !filterByGenre.fiction }
            });

        case "FILTER_BY_PHILOSOPHY":
            return({
                ...state,
                filterByGenre: { ...filterByGenre, philosophy: !filterByGenre.philosophy }
            });

        case "FILTER_BY_ROMANCE":
            return({
                ...state,
                filterByGenre: { ...filterByGenre, romance: !filterByGenre.romance }
            });

        case "FILTER_BY_SELF_HELP":
            return({
                ...state,
                filterByGenre: { ...filterByGenre, self_help: !filterByGenre.self_help }
            });

        case "FILTER_BY_SCIENCE":
            return({
                ...state,
                filterByGenre: { ...filterByGenre, science: !filterByGenre.science }
            });

        // price
        case "FILTER_BY_PRICE":
            return {
				...state,
				filterByPrice: payload
			};

        // discount
        case "FILTER_BY_DISCOUNT":
            return({
                ...state,
                filterByDiscount: payload
            });

        // rating
        case "FILTER_BY_RATING":
            return({
                ...state,
                filterByRating: payload
            });

        // format    
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

        // other    
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
          
        // sort
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

        // clear all
        case "CLEAR_ALL": 
            return({ ...initialFilterValues });
            
        default: 
            return { initialFilterValues }
    }
}

export { initialFilterValues, filterReducerFunction }