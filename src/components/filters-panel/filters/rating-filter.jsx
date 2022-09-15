import { ratings } from "./filters-list";
import { useFilter } from "../../../contexts";


export const RatingFilter = () => {

    const { filterState: { filterByRating }, filterDispatch } = useFilter();

    return(
        <div>
            <h4>Ratings</h4>
            <ul className="list-noBullets">
                {
                    ratings.map(({ _id, ratingOption, htmlFor, value }) => {
                        return(
                            <li key={_id}>
                                <label 
                                    className="filter-item flex-row flex_align-middle"
                                    htmlFor={htmlFor}
                                >
                                    <input 
                                        id={htmlFor}
                                        type="radio" 
                                        name="rating-filter"
                                        value={value}
                                        checked={ filterByRating === value }
                                        onChange={
                                            (event) => filterDispatch({
                                                type: "FILTER_BY_RATING",
                                                payload: event.target.value
                                            })
                                        }
                                    />
                                    {
                                        ratingOption.map(() => {
                                            return(
                                                <i className="fa-solid fa-star filter-item-star"></i>
                                            );
                                        })
                                    }                                                                
                                    & up
                                </label>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}