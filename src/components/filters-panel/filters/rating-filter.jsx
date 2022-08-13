import { ratings } from "./filters-list";


export const RatingFilter = () => {
    return(
        <div>
            <h4>Ratings</h4>
            <ul className="list-noBullets">
                {
                    ratings.map(({ _id, rating }) => {
                        return(
                            <li key={_id}>
                                <label className="filter-item flex-row flex_align-middle">
                                    <input 
                                        type="radio" 
                                        name="rating-filter"
                                    />
                                    {
                                        rating.map(() => {
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