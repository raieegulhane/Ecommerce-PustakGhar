const initialFilterValues = {
    genre: {
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
    price: "",
    discount: "",
    rating: "",
    format: "",
    other: {
        bestseller: false,
        isStock: false
    },
    sortBy: ""
}


const filterReducerFunction = (state, { type, payload }) => {
    switch(type) {
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