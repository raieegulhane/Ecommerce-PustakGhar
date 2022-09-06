const initialCartValues = {
    cart: [],
    wishlist: []
}


const cartReducerFunction = (state, { type, payload }) => {
    switch(type) {
        // CART OPERATIONS
        case "SET_CART":
            return ({
                ...state,
                cart: [ ...payload ]
            });

        case "ADD_TO_CART":
            return ({
                ...state,
                cart: [ ...payload ]
            });

        // WISHLIST OPERATIONS
        case "SET_WISHLIST":
            return ({
                ...state,
                wishlist: [ ...payload ]
            });

        case "ADD_TO_WISHLIST":
            return ({
                ...state,
                wishlist: [ ...payload ]
            });


            
        default:
            return(initialCartValues);
    }
}

export { initialCartValues, cartReducerFunction };
