import axios from "axios";

export const deleteFromWishlistService = (productId, authToken) => {
    const response = axios.delete(
        `/api/user/wishlist/${productId}`,
        {headers: {authorization: authToken}}
    )
    return (response);
}