import "./bookstore.css";
import { useProduct, useFilter } from "../../contexts";
import { FiltersPanel, ProductListing } from "../../components";
import { getFilteredAndSortedProductsFunction } from "../../utility-functions";

export const Bookstore = () => {

    const { productState: { productList, searchResults, searchInput } } = useProduct();
    const { filterState } = useFilter();
    const filteredAndSortedProducts = getFilteredAndSortedProductsFunction(productList, filterState);

    return(
        <div className="bookstore-wrapper grid grid-13layout">
            <FiltersPanel />
            <ProductListing 
                title={"All Books"}
                productList={
                    searchInput.length > 0 ?
                    searchResults : 
                    filteredAndSortedProducts
                }
                searchInput={searchInput}
                searchResults={searchResults}
            />
        </div>
    );
}