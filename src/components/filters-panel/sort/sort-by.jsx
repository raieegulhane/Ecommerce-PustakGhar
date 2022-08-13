import { sortingList } from "./sort-list";

export const SortBy = () => {
    return(
        <div>
            <ul className="list-noBullets">
                {
                    sortingList.map(({ _id, sortBy }) => {
                        return(
                            <li key={_id}>
                                <label className="filter-item flex-row">
                                    <input 
                                        type="radio" 
                                        name="sort-by"
                                    />
                                    {sortBy}
                                </label>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}