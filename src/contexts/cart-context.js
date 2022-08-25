import { createContext, useContext, useReducer } from "react";
import { initialCartValues, cartReducerFunction } from "../reducers";

const CartContext = createContext(initialCartValues);

const CartProvider = ({ children }) => {
    const [ cartState, cartDispatch ] = useReducer(cartReducerFunction, initialCartValues);

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