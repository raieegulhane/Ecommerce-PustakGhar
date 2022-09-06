import axios from "axios";

export const addToCartService = (product, authToken) => {
    const response = axios.post(
        "/api/user/cart",
        { ...product },
        {headers: {authorization: authToken}}
    )
    return (response);
}