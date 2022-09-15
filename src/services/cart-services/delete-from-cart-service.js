import axios from "axios";

export const deleteFromCartService = (productId, authToken) => {
    const response = axios.delete(
        `/api/user/cart/${productId}`,
        {headers: {authorization: authToken}}
    )
    return (response);
}