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

        default: 
            return new Error("Error occured in authentication.");
    }
}

export { initialProductListValues, productReducerFunction };

