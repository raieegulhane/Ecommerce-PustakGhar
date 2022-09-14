const initialProductListValues = {
    productList: [],
    searchInput: "",
    searchResults: []
}

const productReducerFunction = (state, { type, payload }) => {
    const { productList, searchInput } = state;

    switch (type) {
        case "FETCH_PRODUCTS": 
            return ({
                ...state,
                productList: [ ...payload ]
            });

        case "SET_SEARCH_INPUT": 
            return ({
                ...state,
                searchInput: payload.toLowerCase()
            });

        case "GET_SEARCH_RESULTS": 
            // const lowerCasedPayload = payload.toLowerCase()
            return ({
                ...state,
                searchResults: [ ...productList ].filter (
                    ({ title, author, genre }) => {
                        return (
                            title.toLowerCase().includes(searchInput) ||
                            author.toLowerCase().includes(searchInput) ||
                            genre.find((item) => item.includes(searchInput))
                        );
                    } 
                )
            });

        default: 
            return new Error("Error occured in authentication.");
    }
}

export { initialProductListValues, productReducerFunction };

