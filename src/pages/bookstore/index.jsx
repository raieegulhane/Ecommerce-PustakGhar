import "./bookstore.css";
import { FiltersPanel, ProductListing } from "../../components";

export const Bookstore = () => {

    return(
        <div className="bookstore-wrapper grid grid-13layout">
            <FiltersPanel />
            <ProductListing />
        </div>
    );
}