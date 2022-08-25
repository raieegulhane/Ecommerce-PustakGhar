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
        case "ADD_TO_CART":
            return(
                cart.findIndex(
                    (item) => item._id === _id
                ) < 0 ? {
                    ...state,
                    cart: [
                        ...cart,
                        {
                            ...payload,
                            productQuantity: 1,
                            addedToCart: true,
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


        case "REMOVE_FROM_CART":
            return(
                {
                    ...state,
                    cart: cart.filter((item) => item._id !== _id),
                    cartQuantity: cartQuantity - productQuantity,
                    cartPrice: cartPrice - productQuantity * originalPrice,
                    cartDiscount: cartDiscount - (originalPrice - discountedPrice),
                    cartTotal: cartTotal - discountedPrice,
                }
            );


        case "ADD_TO_WISHLIST":
            return(1);

        case "WISHLIST_TO_CART":
            return(1);

        case "CART_TO_WISHLIST":
            return(1);

        case "INCREASE_QUANTITY":
            return(1);

        case "DECREASE_QUANTITY":
            return(1);

        

        case "REMOVE_FROM_WISHLIST":
            return(1);

        default:
            return(initialCartValues);
    }
}

export { initialCartValues, cartReducerFunction };
