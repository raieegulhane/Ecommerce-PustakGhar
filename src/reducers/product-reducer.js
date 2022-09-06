const initialProductListValues = {
    productList: [],
    categoryList: [],
}


const productReducerFunction = (state, { type, payload }) => {
    switch (type) {
        case "FETCH_PRODUCTS": 
            return ({
                ...state,
                productList: [ ...payload ]
            });

        case "FETCH_CATEGORIES": 
            return ({
                ...state,
                categoryList: [ ...payload ]
            });

        default: 
            return new Error("Error occured in authentication.");
    }
}

export { initialProductListValues, productReducerFunction };

