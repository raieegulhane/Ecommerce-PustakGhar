import axios from "axios";

export const getProductByIdService = (productId) => {
    const response = axios.get(`/api/products/${productId}`);
    return(response);
}