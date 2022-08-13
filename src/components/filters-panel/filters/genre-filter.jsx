import { genre } from "./filters-list";


export const GenreFilter = () => {
    return(
        <div>
            <h4>Genre</h4>
            <ul className="list-noBullets">
                {
                    genre.map(({ _id, genre }) => {
                        return(
                            <li key={_id}>
                                <label className="filter-item flex-row">
                                    <input type="checkbox" />
                                    {genre}
                                </label>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}