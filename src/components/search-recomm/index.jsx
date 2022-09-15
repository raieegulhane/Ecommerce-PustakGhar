import "./search-recomm.css";
import { useProduct } from "../../contexts";

export const SearchRecomm = ({ setSearchBoxValue }) => {
    const { productState: { searchReccomendations }, productDispatch } = useProduct();

    const selectBookHandler = (bookTitle) => {
        productDispatch({ type: "INIT_SELECT_RECCOMENDATION", payload: true })
        productDispatch({ type: "SET_SEARCH_INPUT", payload: bookTitle })
        productDispatch({ type: "GET_SEARCH_RESULTS" });
        setSearchBoxValue("");
    }

    return (
        <div className="sr-wrapper">
            <div className="sr-container">
                <ul className="sr-list flex-col list-noBullets">
                {
                    searchReccomendations.map(({ title }) => {
                        return (
                            <li 
                                className="sr-list-item flex-row flex_align-middle"
                                onClick={() => selectBookHandler(title)}
                            >
                                <i className="fa-solid fa-bookmark"></i>
                                <span>{title}</span>
                            </li>
                        );
                    })
                }
                </ul>
            </div>
        </div>
    );
}