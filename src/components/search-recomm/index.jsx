import "./search-recomm.css";
import { useProduct } from "../../contexts";

export const SearchRecomm = () => {
    const { productState: { searchResults }} = useProduct();
    return (
        <div className="sr-wrapper">
            <div className="sr-container">
                <ul className="sr-list flex-col list-noBullets">
                {
                    searchResults.map(({ title }) => {
                        return (
                            <li 
                                className="sr-list-item flex-row flex_align-middle"
                                
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