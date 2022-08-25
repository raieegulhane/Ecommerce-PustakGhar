import { v4 as uuid } from 'uuid';

const initialCartValues = {
    cart: [],
    cartQuantity: 0,
    cartPrice: 0,
    cartDiscount: 0,
    cartTotal: 0,
    wishlist: []
}


const cartReducerFunction = (state, { type, payload }) => {

    const { cart, cartQuantity, cartPrice, cartDiscount, cartTotal, wishlist } = state;
    const { _id, originalPrice, discountedPrice, productQuantity } = payload;

    switch(type) {

        // cart operations
        case "ADD_TO_CART":
            return(
                cart.findIndex(
                    (product) => product._id === _id
                ) < 0 ? {
                    ...state,
                    cart: [
                        ...cart,
                        {
                            ...payload,
                            productQuantity: 1,
                        }
                    ],
                    cartQuantity: cartQuantity + 1,
                    cartPrice: cartPrice +  originalPrice,
                    cartDiscount: cartDiscount + (originalPrice - discountedPrice),
                    cartTotal: cartTotal + discountedPrice
                } : {
                    ...state
                }
            );

        case "INCREASE_QUANTITY":
            return(
                {
                    ...state, 
                    cart: [ ...cart ].map((product) => {
                        if (product._id === _id) {
                            return({
                                ...product, 
                                productQuantity: productQuantity + 1
                            });
                        }
                        return(product);
                    }),
                    cartQuantity: cartQuantity + 1,
                    cartPrice: cartPrice + originalPrice,
                    cartDiscount: cartDiscount + (originalPrice - discountedPrice),
                    cartTotal: cartTotal + discountedPrice
                }
            );

        case "DECREASE_QUANTITY":
            return(
                {
                    ...state, 
                    cart: [ ...cart ].map((product) => {
                        if (product._id === _id) {
                            return({
                                ...product, 
                                productQuantity: productQuantity <= 1 ? productQuantity : productQuantity - 1
                            });
                        }
                        return(product);
                    }),
                    cartQuantity: productQuantity <= 1 ? cartQuantity : cartQuantity - 1,
                    cartPrice: productQuantity <= 1 ? cartPrice : cartPrice - originalPrice,
                    cartDiscount: productQuantity <= 1 ? cartDiscount : cartDiscount - (originalPrice - discountedPrice),
                    cartTotal: productQuantity <= 1 ? cartTotal : cartTotal - discountedPrice
                }
            );

        case "CART_TO_WISHLIST":
            return(
                [ ...wishlist].findIndex(
                    (product) => product._id === _id
                ) < 0 ? {
                    ...state,
                    cart: [ ...cart ].filter((product) => product._id !== _id),
                    cartQuantity: cartQuantity - productQuantity,
                    cartPrice: cartPrice - productQuantity * originalPrice,
                    cartDiscount: cartDiscount - (originalPrice - discountedPrice),
                    cartTotal: cartTotal - discountedPrice,
                    wishlist: [
                        ...wishlist,
                        {
                            ...payload,
                            productQuantity: 1,
                        }
                    ],
                } : {
                    ...state
                }
            );
    

        case "REMOVE_FROM_CART":
            return(
                {
                    ...state,
                    cart: [ ...cart ].filter((product) => product._id !== _id),
                    cartQuantity: cartQuantity - productQuantity,
                    cartPrice: cartPrice - productQuantity * originalPrice,
                    cartDiscount: cartDiscount - (originalPrice - discountedPrice),
                    cartTotal: cartTotal - discountedPrice,
                }
            );


        // wishlist operations
        case "ADD_TO_WISHLIST":
            return(
                [ ...wishlist].findIndex(
                    (product) => product._id === _id
                ) < 0 ? {
                    ...state,
                    wishlist: [
                        ...wishlist,
                        {
                            ...payload,
                            productQuantity: 1,
                        }
                    ],
                } : {
                    ...state
                }
            );

            case "WISHLIST_TO_CART":
            return(
                cart.findIndex(
                    (product) => product._id === _id
                ) < 0 ? {
                    ...state,
                    cart: [
                        ...cart,
                        {
                            ...payload,
                            productQuantity: 1,
                        }
                    ],
                    cartQuantity: cartQuantity + 1,
                    cartPrice: cartPrice +  originalPrice,
                    cartDiscount: cartDiscount + (originalPrice - discountedPrice),
                    cartTotal: cartTotal + discountedPrice,
                    wishlist: [ ...wishlist ].filter((product) => product._id !== _id),
                } : {
                    ...state
                }
            );

            

        
        case "REMOVE_FROM_WISHLIST":
            return(
                {
                    ...state,
                    wishlist: [ ...wishlist ].filter((product) => product._id !== _id),
                }
            );

        default:
            return(initialCartValues);
    }
}

export { initialCartValues, cartReducerFunction };
