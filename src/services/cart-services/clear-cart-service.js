import axios from "axios";

export const clearCartService = (authToken) => {
    const response = axios.post(
        "/api/user/cart/clear",
        {},
        {headers: {authorization: authToken}}
    )
    return (response);
}