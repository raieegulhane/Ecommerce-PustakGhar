import { 
    filterByDiscountFunction, 
    filterByRatingFunction,
    filterByFormatFunction,
    otherFiltersFunction,
    filterByBestSellerFunction,
    filterByInStockFunction,
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
    const filteredByRatingProducts = filterByRatingFunction(filteredByDiscountProducts, filterByRating);
    const filteredByFormatProducts = filterByFormatFunction(filteredByRatingProducts, filterByFormat)
    const filteredByBestSellerProducts = filterByBestSellerFunction(filteredByFormatProducts, otherFilters);
    const filteredByInStockProducts = filterByInStockFunction(filteredByBestSellerProducts, otherFilters)
    const sortedProducts = sortByfunction(filteredByInStockProducts, sortBy);
    
    return sortedProducts;
}