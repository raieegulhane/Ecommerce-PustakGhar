import axios from "axios";

export const getCartItemsService = (authToken) => {
    const response = axios.get(
        "/api/user/cart", 
        {headers: {authorization: authToken}}
    );
    return (response);
}