import { otherFilters } from "./filters-list";


export const OtherFilter = () => {
    return(
        <div>
            <h4>Other</h4>
            <ul className="list-noBullets">
                {
                    otherFilters.map(({ _id, filter }) => {
                        return(
                            <li key={_id}>
                                <label className="filter-item flex-row">
                                    <input type="checkbox" />
                                    {filter}
                                </label>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}