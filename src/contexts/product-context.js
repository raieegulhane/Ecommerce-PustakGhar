import { createContext, useContext, useReducer, useEffect } from "react";
import { toast } from "react-toastify";
import { initialProductListValues, productReducerFunction } from "../reducers";
import { getProductsService } from "../services";


const ProductContext = createContext({ ...initialProductListValues });

const ProductProvider = ({ children }) => {
    
    const [ productState, productDispatch ] = useReducer(productReducerFunction, initialProductListValues);

    useEffect (() => {
        (async () => {
            try {
                const response = await getProductsService();
                productDispatch({ type: "FETCH_PRODUCTS", payload: response.data.products})
            } catch (error) {
                console.log(error)
                toast.error("Error occured while fetching products.");
            }
        }) ();
    }, []);
    
    return (
        <ProductContext.Provider
            value={{ productState, productDispatch }}
        >
            {children}
        </ProductContext.Provider>
    );
}

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };