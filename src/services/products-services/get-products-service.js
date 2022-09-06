import axios from "axios";

export const getProductsService = () => {
    const response = axios.get("/api/products");
    return(response);
}