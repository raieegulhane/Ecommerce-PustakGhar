import "./product-card-hr.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCartService, deleteFromWishlistService } from "../../services";
import { useAuth, useCart } from "../../contexts";

export const WishlistCardHr = ({ product }) => {
    const {
        _id,
        id,
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

    const navigate = useNavigate();

    const { authState: { authToken }} = useAuth();
    const { cartState: { cart }, cartDispatch } = useCart();
    const [ inCart, setInCart ] = useState(false);

    useEffect (() => {
        if (cart.find((item) => item._id === _id)) {
            setInCart(true);
        }
    }, [inCart, _id]);

    const moveToCartFunction = async (event) => {
        event.preventDefault();
        if (inCart) {
            navigate("/cart");
        } else {
            try {
                const { data: { wishlist }} = await deleteFromWishlistService(_id, authToken);
                const { data: { cart }} = await addToCartService(product, authToken);
                cartDispatch({ type: "SET_WISHLIST", payload: wishlist });
                cartDispatch({ type: "SET_CART", payload: cart});
                setInCart(true);
                toast.success("Book moved to cart.");
            } catch (error) {
                console.log("ERROR__MOVE_TO_CART_FROM_WISHLIST: ", error);
                toast.error("Unable to move book to cart.");
            }
        }
    }

    const removeFromWishlist = async (event) => {
        event.preventDefault();
        try {
            const { data: { wishlist }} = await deleteFromWishlistService(_id, authToken);
            cartDispatch({ type: "SET_WISHLIST", payload: wishlist })
            toast.info("Book removed from wishlist");
        } catch (error) {
            console.log("ERROR__REMOVE_FROM_WISHLIST: ", error);
            toast.error("Unable to remove book from wishlist.");
        }
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
                            <span>
                            {
                                genre?.map((genreName, index) => {
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
                            </span> | <span>{format}</span>
                        </p>
                    </div>

                    <div className="prc-rt-container flex-row flex_align-middle">
                        <div className="price-container flex-row flex_align-middle">
                            <span className="price">₹{discountedPrice}</span> 
                            <span className="off-price txt-gray txt-linethrough">₹{originalPrice}</span> 
                            <span className="off-price txt-green">{discount}% off</span>
                        </div>
                        <div className="wl-rating-block rating_block-dark txt-sm txt-bold">  
                            <i className="fa-solid fa-star"></i>                                                                 
                            {stars} | {totalRatings}
                        </div> 
                    </div>
                    
                    <div className="wl-btn-container flex-row">
                        <button 
                            className={`txt-sm wl-btn btn btn-primary btn-wt-icon btn-sq ${inStock ? "" : "btn-disabled"}`}
                            onClick={moveToCartFunction}
                        >
                        {
                            inStock && !inCart &&
                            <i className="fa-solid fa-cart-shopping"></i>
                        }
                        {
                            inCart && 
                            <i className="fa-solid fa-circle-check"></i>
                        }
                        {
                            inStock ? (
                                inCart ? 
                                <span>Go To Cart</span> :
                                <span>Add to Cart</span>
                            ) : <span>Out of Stock</span>
                        }
                        </button> 
                        <button 
                            className="txt-sm wl-btn btn btn-outline btn-wt-icon btn-sq"
                            onClick={() => navigate(`/product/${id}`)}
                        >
                            View Details
                        </button> 
                    </div>
                </div>

                <button 
                    className="del-btn-wl btn btn-link btn-wt-icon"
                    onClick={removeFromWishlist}
                >
                    <i className="fa-solid fa-trash"></i>
                    <span>Remove</span>
                </button>  
            </div>
        </div>
    );
}