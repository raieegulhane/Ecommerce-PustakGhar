import { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import { getCartItemsService, getWishlistItemsService } from "../services";
import { initialCartValues, cartReducerFunction } from "../reducers";
import { useAuth } from "./auth-context";

const CartContext = createContext(initialCartValues);

const CartProvider = ({ children }) => {
    const { authState: { isAuth, authToken }} = useAuth();
    const [ cartState, cartDispatch ] = useReducer(cartReducerFunction, initialCartValues);

    const fetchCartData = async () => {
        try {
            const { data: { cart }} = await getCartItemsService(authToken);
            cartDispatch({ type: "SET_CART", payload: cart });
        } catch (error) {
            console.log("ERROR__FETCH_CART_DATA: ", error);
            toast.error("Problem occured while fetching data.");
        }
    }

    const fetchWishlistData = async () => {
        try {
            const { data: { wishlist }} = await getWishlistItemsService(authToken);
            cartDispatch({ type: "SET_WISHLIST", payload: wishlist });
        } catch (error) {
            console.log("ERROR__FETCH_CART_DATA: ", error);
            toast.error("Problem occured while fetching data.");
        }
    }

    useEffect (() => {
        if (isAuth) {
            fetchCartData();
            fetchWishlistData();
        }
    }, [isAuth]);

    return(
        <CartContext.Provider
            value={{ cartState, cartDispatch }}
        >
            {children}
        </CartContext.Provider>
    );
}

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };