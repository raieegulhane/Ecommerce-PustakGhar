import "./product-card-hr.css";
import { Link } from "react-router-dom"
import { useCart } from "../../contexts";

export const ProductCardHr = ({ 
    product,
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
    productQuantity,
    inCart, 
    inWishlist
}) => {

    const { cartState: { cart, wishlist }, cartDispatch } = useCart();

    const checkInWishlistFunction = (id) => {
        return wishlist.findIndex((product) => product._id === id) < 0 ? false : true;
    }

    return(
        <div  className="card-hr-wrapper">
            <div className="card-hr-container flex-row">
                <img
                    className="card-img image-100pr" 
                    src={coverImage} 
                />

                <div className="flex-col flex_justify-sb">
                    <div>
                        <h2>{title}</h2>
                        <p>{author}</p>
                        <p className="txt-bold txt-sm">
                            {
                                inWishlist &&
                                <span>
                                    {
                                        genre.map((genreName, index) => {
                                            if (index+1 === genre.length) {
                                                return(
                                                    <span className="genre-name">{genreName} </span>
                                                );
                                            } 
                                            
                                            return(
                                                <span className="genre-name">{genreName}, </span>
                                            );
                                        })
                                    }
                                    {" "}|{" "}
                                </span>
                            }
                            <span>{format}</span>
                        </p>
                    </div>

                    <div className="prc-rt-container flex-row flex_align-middle">
                        <div className="price-container flex-row flex_align-middle">
                            <span className="price">₹{discountedPrice}</span> 
                            <span className="off-price txt-gray txt-linethrough">₹{originalPrice}</span> 
                            <span className="off-price txt-green">{discount}% off</span>
                        </div>
                        {
                            inWishlist &&
                            <div className="wl-rating-block rating_block-dark txt-sm txt-bold">  
                                <i className="fa-solid fa-star"></i>                                                                 
                                {stars} | {totalRatings}
                            </div> 
                        }
                    </div>
                    
                    {
                        inCart &&
                        <div className="flex-row flex_align-middle">
                            <div className="qt-container flex-row flex_align-middle">
                                <button 
                                    className="qt-btn txt-sm btn btn-primary flex flex_justify-center flex_align-middle"
                                    onClick={() => cartDispatch({ type: "INCREASE_QUANTITY", payload: product})}
                                >
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                                <span>{productQuantity}</span>
                                <button 
                                    className={`qt-btn txt-sm btn btn-primary flex flex_justify-center flex_align-middle ${productQuantity > 1 ? "" : "btn-disabled"}`}
                                    onClick={() => cartDispatch({ type: "DECREASE_QUANTITY", payload: product})}
                                >
                                    <i className="fa-solid fa-minus"></i>
                                </button>
                            </div>

                            <button 
                                className="del-btn btn btn-link btn-wt-icon"
                                onClick={() => cartDispatch({ type: "REMOVE_FROM_CART", payload: product})}
                            >
                                <i className="fa-solid fa-trash"></i>
                                <span>Delete</span>
                            </button>  
                        </div>  
                    }

                    {
                        inWishlist &&
                        <div className="wl-btn-container flex-row">
                            {
                                cart.findIndex((product) => product._id === _id) < 0 ? (
                                    <button 
                                        className={`txt-sm wl-btn btn btn-primary btn-wt-icon btn-sq ${inStock ? "" : "btn-disabled"}`}
                                        onClick={() => cartDispatch({ type: "WISHLIST_TO_CART", payload: product})}
                                    >
                                        {
                                            inStock &&
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        }
                                        {
                                            inStock ? 
                                            <span>Add to Cart</span> :
                                            <span>Out of Stock</span>
                                        }
                                    </button> 
                                ) : (
                                    <Link
                                        to={"/cart"}
                                        className="link-noDecoration txt-sm wl-btn btn btn-primary btn-wt-icon btn-sq"
                                    >
                                        <i class="fa-solid fa-circle-check"></i>
                                        <span>Go to cart</span>
                                    </Link>
                                )
                            }
                           
                            <Link 
                                to={`/product/${_id}`}
                                className="txt-sm wl-btn link-noDecoration btn btn-outline btn-wt-icon btn-sq"
                                onClick={() => cartDispatch({ type: "CART_TO_WISHLIST", payload: product})}
                            >
                                View Details
                            </Link> 
                        </div>
                    }
                </div>

                {
                    inCart &&
                    <div className="cart-btn-container flex-col">
                        <button 
                            className={`txt-sm cart-btn link-noDecoration btn btn-primary btn-wt-icon btn-sq ${checkInWishlistFunction(_id) ? "btn-disabled" : ""}`}
                            onClick={() => cartDispatch({ type: "CART_TO_WISHLIST", payload: product})}
                        >
                            <i className="fa-solid fa-heart"></i>
                            <span>
                                {
                                    checkInWishlistFunction(_id) ? 
                                    "Item in Wishlist" : 
                                    "Add to Wishlist"
                                }
                            </span>
                        </button>
                        <Link 
                            to={`/product/${_id}`}
                            className="txt-sm cart-btn wl-btn link-noDecoration btn btn-outline btn-wt-icon btn-sq"
                            onClick={() => cartDispatch({ type: "CART_TO_WISHLIST", payload: product})}
                        >
                            View Details
                        </Link> 
                    </div> 
                }

                {
                    inWishlist &&
                    <button 
                        className="del-btn-wl btn btn-link btn-wt-icon"
                        onClick={() => cartDispatch({ type: "REMOVE_FROM_WISHLIST", payload: product})}
                    >
                        <i className="fa-solid fa-trash"></i>
                        <span>Remove</span>
                    </button>  
                }

            </div>
        </div>
    );
}