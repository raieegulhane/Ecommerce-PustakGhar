import "./hr-card-listing.css";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts";
import { CartCardHr } from "../../components";


export const CartHrCardListing = ({ inCart, inWishlist }) => {

    const { cartState: { cart }} = useCart();

    return(
        <div className="hr-cl-wrapper">
            <div className="hr-cl-header prod-list-header flex-row flex_justify-center">
                <h1 className="product_heading txt-underline">Shopping Cart</h1>
            </div>

            <div className="hr-cl-container">
            {
                cart.length > 0 ? (
                    cart.map((product) => {
                        return(
                            <CartCardHr
                                key={product._id}
                                product={product}
                            />
                        );
                    })
                ) : (
                    <div className="empty-list-container flex-col flex_justify-center flex_align-middle"> 
                        <p className="empty-list-txt">Your cart is empty.</p>
                        <div className="empty-list-btn-container flex-row flex_justify-sb">
                            <Link
                                to={"/bookstore"}
                                className="empty-list-btn btn btn-primary btn-sq btn-wt-icon link-noDecoration"
                            >
                                <i className="fa-solid fa-book-open"></i>
                                <span>Go to Bookstore</span>
                            </Link>
                            <Link
                                to={"/wishlist"}
                                className="empty-list-btn btn btn-outline btn-sq btn-wt-icon link-noDecoration"
                            >
                                <i className="fa-solid fa-heart"></i>
                                <span>Go to Wishlist</span>
                            </Link>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    );
} 