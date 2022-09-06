import "./hr-card-listing.css";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts";
import { WishlistCardHr } from "../../components";


export const WishlistHrCardListing = () => {

    const { cartState: { wishlist } } = useCart();

    return(
        <div className="hr-cl-wrapper">
            <div className="hr-cl-header prod-list-header flex-row flex_justify-center">
                <h1 className="product_heading txt-underline">Wishlist</h1>
            </div>

            <div className="hr-cl-container">
            {
                wishlist.length > 0 ? (
                    wishlist.map((product) => {
                        return(
                            <WishlistCardHr
                                key={product._id}
                                product={product}
                            />
                        );
                    })
                ) : (
                    <div className="empty-list-container flex-col flex_justify-center flex_align-middle"> 
                        <p className="empty-list-txt">Your wishlist is empty.</p>
                        <div className="empty-list-btn-container flex-row flex_justify-sb">
                            <Link
                                to={"/bookstore"}
                                className="empty-list-btn btn btn-primary btn-sq btn-wt-icon link-noDecoration"
                            >
                                <i className="fa-solid fa-book-open"></i>
                                <span>Go to Bookstore</span>
                            </Link>
                            <Link
                                to={"/cart"}
                                className="empty-list-btn btn btn-outline btn-sq btn-wt-icon link-noDecoration"
                            >
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span>Go to Cart</span>
                            </Link>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    );
} 