import { format } from "./filters-list";


export const FormatFilter = () => {
    return(
        <div>
            <h4>Format</h4>
            <ul className="list-noBullets">
                {
                    format.map(({ _id, format }) => {
                        return(
                            <li key={_id}>
                                <label className="filter-item flex-row">
                                    <input 
                                        type="radio" 
                                        name="format"    
                                    />
                                    {format}
                                </label>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}