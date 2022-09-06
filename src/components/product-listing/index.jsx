import "./product-listing.css";
import { ProductCardVr } from "../../components";


export const ProductListing = ({ title, productList }) => {
    
    return(
        <div className="prod-list-wrapper">
            <div className="prod-list-header flex-row flex_justify-center">
                <h1 className="product_heading txt-underline">{title}</h1>
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