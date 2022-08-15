import { 
    filterByDiscountFunction, 
    sortByfunction 
} from ".";

export const getFilteredAndSortedProductsFunction = (allProducts, filterState) => {
    const {  
        filterByGenre, 
        filterByPrice, 
        filterByDiscount, 
        filterByRating, 
        filterByFormat, 
        otherFilters, 
        sortBy 
    } = filterState;

    const filteredByDiscountProducts = filterByDiscountFunction(allProducts, filterByDiscount);
    const sortedProducts = sortByfunction(filteredByDiscountProducts, sortBy);
    
    return sortedProducts;
}