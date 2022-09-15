import { format } from "./filters-list";
import { useFilter } from "../../../contexts";


export const FormatFilter = () => {

    const { filterState: { filterByFormat }, filterDispatch } = useFilter();

    return(
        <div>
            <h4>Format</h4>
            <ul className="list-noBullets">
                {
                    format.map(({ _id, formatOption, htmlFor, value, actionType }) => {
                        return(
                            <li key={_id}>
                                <label 
                                    className="filter-item flex-row"
                                    htmlFor={htmlFor}
                                >
                                    <input 
                                        id={htmlFor}
                                        type="checkbox" 
                                        name="format"
                                        value={value}
                                        checked={filterByFormat[value]}
                                        onChange={() => filterDispatch({ type: actionType })}    
                                    />
                                    {formatOption}
                                </label>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}