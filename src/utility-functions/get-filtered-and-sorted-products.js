import { 
    filterByGenreFunction,
    filterByPriceFunction,
    filterByDiscountFunction, 
    filterByRatingFunction,
    filterByFormatFunction,
    filterByBestSellerFunction,
    filterByInStockFunction,
    sortByfunction,
    removeDuplicateFunction
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

    const filteredByGenreProducts = filterByGenreFunction(allProducts, filterByGenre);
    const filteredByPriceProducts = filterByPriceFunction(filteredByGenreProducts, filterByPrice);
    const filteredByDiscountProducts = filterByDiscountFunction(filteredByPriceProducts, filterByDiscount);
    const filteredByRatingProducts = filterByRatingFunction(filteredByDiscountProducts, filterByRating);
    const filteredByFormatProducts = filterByFormatFunction(filteredByRatingProducts, filterByFormat)
    const filteredByBestSellerProducts = filterByBestSellerFunction(filteredByFormatProducts, otherFilters);
    const filteredByInStockProducts = filterByInStockFunction(filteredByBestSellerProducts, otherFilters)
    const sortedProducts = sortByfunction(filteredByInStockProducts, sortBy);
    
    const finalProductList = removeDuplicateFunction(sortedProducts);

    return finalProductList;
}