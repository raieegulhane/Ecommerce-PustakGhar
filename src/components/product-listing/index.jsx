import "./product-listing.css";
import { ProductCardVr } from "../../components";


export const ProductListing = ({ title, productList, searchInput, searchResults }) => {
    
    return(
        <div className="prod-list-wrapper">
            <div className="main-header flex-row flex_justify-center">
                <h1 className="main-heading txt-underline">{title}</h1>
            </div>
            <div className="prod-list-details">
                {
                    searchInput.length > 0 &&
                    <p>Showing results for: <span>{searchInput}</span></p>
                }
                <p>{productList.length} results found</p>
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