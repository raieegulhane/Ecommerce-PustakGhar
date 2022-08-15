import { sortingList } from "./sort-list";
import { useFilter } from "../../../contexts";

export const SortBy = () => {

    const { filterState: { sortBy }, filterDispatch } = useFilter();
    return(
        <div>
            <ul className="list-noBullets">
                {
                    sortingList.map(({ _id, sortCriteria, value, actionType }) => {
                        return(
                            <li key={_id}>
                                <label 
                                    className="filter-item flex-row"
                                    htmlFor={value}
                                >
                                    <input 
                                        id={value}
                                        type="radio" 
                                        name="sort-by"
                                        value={value}
                                        checked={ sortBy === actionType }
                                        onChange={() => filterDispatch({ type: actionType })}
                                    />
                                    {sortCriteria}
                                </label>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}