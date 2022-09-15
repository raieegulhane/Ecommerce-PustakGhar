import "./hr-card-listing.css";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts";
import { ProductCardHr } from "../../components";


export const HrCardListing = ({ inCart, inWishlist }) => {

    const { cartState: { cart, wishlist } } = useCart();

    return(
        <div className="hr-cl-wrapper">
            <div className="hr-cl-header prod-list-header flex-row flex_justify-center">
                <h1 className="product_heading txt-underline">
                    { inCart ? "Shopping Cart" : "Wishlist"}
                </h1>
            </div>

            {/* if cart */}
            {
                inCart && 
                <div className="hr-cl-container">
                    {
                        cart.length > 0 ? (
                            cart.map((product) => {
                                const {
                                    _id,
                                    title,
                                    author,
                                    originalPrice,
                                    discountedPrice,
                                    discount,
                                    format,
                                    coverImage,
                                    productQuantity,
                                } = product;
        
                                return(
                                    <ProductCardHr
                                        key={_id}
                                        _id={_id}
                                        product={product}
                                        title={title}
                                        author={author}
                                        originalPrice={originalPrice}
                                        discountedPrice={discountedPrice}
                                        discount={discount}
                                        format={format}
                                        coverImage={coverImage}
                                        productQuantity={productQuantity}
                                        inCart={inCart}
                                        inWishlist={inWishlist}
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
            }


            {/* if wishlist  */}
            {
                inWishlist && 
                <div className="hr-cl-container">
                    {
                        wishlist.length > 0 ? (
                            wishlist.map((product) => {
                                const {
                                    _id,
                                    title,
                                    author,
                                    originalPrice,
                                    discountedPrice,
                                    discount,
                                    genre,
                                    stars,
                                    totalRatings,
                                    format,
                                    inStock,
                                    coverImage,
                                } = product;
        
                                return(
                                    <ProductCardHr
                                        key={_id}
                                        _id={_id}
                                        product={product}
                                        title={title}
                                        author={author}
                                        originalPrice={originalPrice}
                                        discountedPrice={discountedPrice}
                                        discount={discount}
                                        genre={genre}
                                        stars={stars}
                                        totalRatings={totalRatings}
                                        format={format}
                                        inStock={inStock}
                                        coverImage={coverImage}
                                        inCart={inCart}
                                        inWishlist={inWishlist}
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
            }
        </div>
    );
} 