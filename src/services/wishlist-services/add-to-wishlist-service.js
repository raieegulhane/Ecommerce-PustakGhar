import axios from "axios";

export const addToWishlistService = (product, authToken) => {
    const response = axios.post(
        "/api/user/wishlist",
        { ...product },
        {headers: {authorization: authToken}}
    )
    return (response);
}