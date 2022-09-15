import "./bookstore.css";
import { useProduct, useFilter } from "../../contexts";
import { FiltersPanel, ProductListing } from "../../components";
import { getFilteredAndSortedProductsFunction } from "../../utility-functions";

export const Bookstore = () => {

    const { productState: { 
        productList, 
        searchResults, 
        searchInput, 
        showSearched, 
        showClicked 
    } } = useProduct();
    const { filterState } = useFilter();
    const inputProductList = (showSearched || showClicked) ? searchResults : productList;
    const filteredAndSortedProducts = getFilteredAndSortedProductsFunction(inputProductList, filterState);

    return(
        <div className="bookstore-wrapper grid grid-13layout">
            <FiltersPanel />
            <ProductListing 
                title={"All Books"}
                productList={filteredAndSortedProducts}
                searchInput={searchInput}
                searchResults={searchResults}
            />
        </div>
    );
}