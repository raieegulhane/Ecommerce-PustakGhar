import "./hr-card-listing.css";
import { ProductCardHr } from "../../components";


export const HrCardListing = ({ inCart, inWishlist }) => {
    return(
        <div className="hr-cl-wrapper">
            <div className="hr-cl-header prod-list-header flex-row flex_justify-center">
                <h1 className="product_heading txt-underline">
                    { inCart ? "Shopping Cart" : "Wishlist"}
                </h1>
            </div>

            <div className="hr-cl-container">
                <ProductCardHr 
                    inCart={inCart}
                    inWishlist={inWishlist}
                />
                <ProductCardHr 
                    inCart={inCart}
                    inWishlist={inWishlist}
                />
                <ProductCardHr 
                    inCart={inCart}
                    inWishlist={inWishlist}
                />
            </div>
        </div>
    );
} 