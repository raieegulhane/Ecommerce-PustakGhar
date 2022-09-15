import "./product-listing.css";
import { ProductCardVr } from "../../components";
import { useProduct } from "../../contexts";


export const ProductListing = ({ title, productList, searchInput }) => {
    const { productState: { showSearched }, productDispatch } = useProduct();

    return(
        <div className="prod-list-wrapper">
            <div className="main-header flex-row flex_justify-center">
                <h1 className="main-heading txt-underline">{title}</h1>
            </div>
            <div className="prod-list-details">
                {
                    searchInput.length > 0 &&
                    showSearched &&
                    <div className="flex-row flex_justify-sb">
                        {
                            showSearched &&
                            <p className="txt-bold">Showing search results for: <span className="txt-ittalic txt-primary">{searchInput}</span></p>
                        }
                        <button 
                            className="btn-see-all btn btn-link"
                            onClick={() => productDispatch({ type: "INIT_SEARCH", payload: false })}
                        >
                            Show All Books
                        </button>
                    </div>
                }
                <p className="txt-bold">Number of books found: <span className="txt-primary">{productList.length}</span></p>
            </div>
            <div className="prod-list-container flex-row flex_justify-center">
                {
                    productList.map((product) => {
                        return(
                            <ProductCardVr 
                                product={product}
                                key={product._id}
                            />
                        );
                    }) 
                }

                {
                    productList.length < 1 &&
                    <p>Sorry! Products you are searching for are unavailable at the moment.</p>
                }
            </div>
        </div>
    );
}