import "./bookstore.css";
import { products } from "../../backend/db/products";
import { useFilter } from "../../contexts";
import { FiltersPanel, ProductListing } from "../../components";
import { getFilteredAndSortedProductsFunction } from "../../utility-functions";

export const Bookstore = () => {

    const { filterState } = useFilter();
    const filteredAndSortedProducts = getFilteredAndSortedProductsFunction(products, filterState);

    return(
        <div className="bookstore-wrapper grid grid-13layout">
            <FiltersPanel />
            <ProductListing 
                title={"All Books"}
                productList={filteredAndSortedProducts}
            />
        </div>
    );
}