import axios from "axios";

export const getWishlistItemsService = (authToken) => {
    const response = axios.get(
        "/api/user/wishlist", 
        {headers: {authorization: authToken}}
    );
    return (response);
}