const initialCartValues = {
    cart: [],
    wishlist: []
}

const cartReducerFunction = (state, { type, payload }) => {
    const { cartDetails } = state;

    switch(type) {
        case "SET_CART":
            return ({
                ...state,
                cart: [ ...payload ]
            });

        case "SET_WISHLIST":
            return ({
                ...state,
                wishlist: [ ...payload ]
            });
            
        default:
            return(initialCartValues);
    }
}

export { initialCartValues, cartReducerFunction };
