import { otherFiltersList } from "./filters-list";
import { useFilter } from "../../../contexts";


export const OtherFilter = () => {

    const { filterState: { otherFilters }, filterDispatch } = useFilter();

    return(
        <div>
            <h4>Other</h4>
            
            <ul className="list-noBullets">
                {
                    otherFiltersList.map(({ _id, filterOption, htmlFor, value, actionType }) => {
                        return(
                            <li key={_id}>
                                <label 
                                    className="filter-item flex-row"
                                    htmlFor={htmlFor}
                                >
                                    <input 
                                        id={htmlFor}
                                        type="checkbox" 
                                        name="other-filter"
                                        value={value}
                                        checked={otherFilters[value]}
                                        onChange={() => filterDispatch({ type: actionType })}    
                                    />
                                    {filterOption}
                                </label>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}