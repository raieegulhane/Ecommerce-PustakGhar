import axios from "axios";

export const getProductQtyService = (productId, type, authToken) => {
    const response = axios.post(
        `/api/user/cart/${productId}`,
		{ action: { type } },
        {headers: {authorization: authToken}}
    )
    return (response);
}