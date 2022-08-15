import { sortByfunction } from ".";

export const getFilteredAndSortedProductsFunction = (allProducts, filterState) => {
    const {  
        genre, 
        price, 
        discount, 
        rating, 
        format, 
        other, 
        sortBy 
    } = filterState;

    const sortedProducts = sortByfunction(allProducts, sortBy);
    return sortedProducts;
}