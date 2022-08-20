import "./filter-panel.css"
import { useFilter } from "../../contexts";
import { 
    GenreFilter, 
    PriceFilter, 
    DiscountFilter, 
    RatingFilter, 
    FormatFilter, 
    OtherFilter 
} from "./filters";
import { SortBy } from "./sort/sort-by";

export const FiltersPanel = () => {
    const { filterDispatch } = useFilter();

    return(
        <aside className="filters-wrapper flex-col">
            <div className="filters-container">
                <div className="filters-header flex-row flex_align-bottom flex_justify-sb">
                    <h2 className="filters-heading txt-underline">Filters</h2>
                    <button 
                        className="btn-clear btn btn-link"
                        onClick={() => filterDispatch({type: "CLEAR_ALL"})}
                    >
                        Clear All
                    </button>
                </div>
                <div className="filters flex-col">
                    <GenreFilter />
                    <PriceFilter />
                    <DiscountFilter />
                    <RatingFilter />
                    <FormatFilter />
                    <OtherFilter />
                </div>
            </div>
            <div className="filters-container sort-container">
                <div className="filters-header flex-row flex_align-bottom flex_justify-sb">
                    <h2 className="filters-heading txt-underline">Sort By</h2>
                </div>
                <SortBy />
            </div>
        </aside>
    );
}