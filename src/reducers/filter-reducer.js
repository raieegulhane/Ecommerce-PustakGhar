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
        selfHelp: false,
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
        default: 
            return { initialFilterValues }
    }
}

export { initialFilterValues, filterReducerFunction }