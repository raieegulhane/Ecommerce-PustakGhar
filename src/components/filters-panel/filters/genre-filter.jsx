import { genreList } from "./filters-list";
import { useFilter } from "../../../contexts";


export const GenreFilter = () => {

    const { filterState: { filterByGenre }, filterDispatch } = useFilter();

    return(
        <div>
            <h4>Genre</h4>
            <ul className="list-noBullets">
                {
                    genreList.map(({ _id, genreOption, htmlFor, value, actionType }) => {
                        return(
                            <li key={_id}>
                                <label 
                                    className="filter-item flex-row"
                                    htmlFor={htmlFor}    
                                >
                                    <input 
                                        id={htmlFor}
                                        type="checkbox"
                                        name="genre"
                                        value={value}
                                        checked={filterByGenre.value}
                                        onChange={() => filterDispatch({ type: actionType })} 
                                    />
                                    {genreOption}
                                </label>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}