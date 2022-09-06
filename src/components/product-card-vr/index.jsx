import "./product-card-vr.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useCart } from "../../contexts";
import { addToCartService, addToWishlistService, deleteFromWishlistService } from "../../services";
import { useEffect, useState } from "react";


export const ProductCardVr = ({ product }) => {
    const { 
        _id,
        coverImage, 
        title, 
        author, 
        stars, 
        totalRatings, 
        discountedPrice, 
        originalPrice, 
        discount, 
        format, 
        bestSeller, 
        inStock 
    } = product;

    const navigate = useNavigate();

    const { authState: { isAuth, authToken } } = useAuth();
    const { cartState: { cart, wishlist }, cartDispatch } = useCart();
    const [ inCart, setInCart ] = useState(false);    
    const [ inWishlist, setInwishlist ] = useState(false);

    useEffect (() => {
        if (cart.findIndex((item) => item._id === _id) < 0) {
            setInCart(false);
        }
        if (wishlist.findIndex((item) => item._id === _id) < 0) {
            setInwishlist(false);
        }
    }, [wishlist, _id]);

    const addToCartFunction = async () => {
        if (inCart) {
            navigate("/cart");
        } else {
            if (!isAuth) {
                navigate("/login")
                toast.info("Please login to continue.");
            } else {
                try {
                    const { data: { cart }} = await addToCartService(product, authToken);
                    cartDispatch({ type: "SET_CART", payload: cart });
                    setInCart(true);
                    toast.success("Book added to the cart");
                } catch (error) {
                    console.log("ERROR__ADD_TO_CART: ", error);
                    toast.error("Problem occured while adding to cart.");
                }
            }
        }
    }

    const addToWishlistFunction = async () => {
        if (!isAuth) {
            navigate("/login")
            toast.info("Please login to continue.");
        } else {
            try {
                const { data: { wishlist}} = await addToWishlistService(product, authToken);
                cartDispatch({ type: "SET_WISHLIST", payload: wishlist });
                setInwishlist(true)
                toast.success("Book added to wishlist")
            } catch (error) {
                console.log("ERROR__ADD_TO_WISHLIST: ", error);
                toast.error("Problem occured while adding to wishlist.");
            }
        }
    }

    const removeFromWishlistFunction = async () => {
        try {
            const { data: { wishlist }} = await deleteFromWishlistService(_id, authToken);
            cartDispatch({ type: "SET_WISHLIST", payload: wishlist });
            setInwishlist(false)
            toast.info("Book removed from wishlist")
        } catch (error) {
            console.log("ERROR__REMOVE_FROM_WISHLIST: ", error);
            toast.error("Problem occured while adding to wishlist.");
        }
    }

    return(
        <div className="card_container card-vr">
            {
                bestSeller &&
                <div className="badge badge-sq">Best Seller</div>
            }
            
            <button 
                className={`btn-icon wishlist-btn ${inWishlist ? "wl-selected" : "wl-not-selected"}`}
                onClick={inWishlist ? removeFromWishlistFunction : addToWishlistFunction}
            >
                <i className="wishlist-icon fa-solid fa-heart"></i>
            </button>

            <div className="img-container card-img flex-col">
                <img 
                    className="card-img image-100pr" 
                    src={coverImage} 
                    alt={title} 
                />
                {
                    !inStock &&
                    <div className="card_overlay">
                        <p>Out Of Stock</p>
                    </div>
                }
                <div className="rating-container rating_block-dark txt-sm txt-bold">  
                    <i className="fa-solid fa-star"></i>                                                                 
                    {stars} | {totalRatings}
                </div> 
            </div>

            <div className="card_content flex-col">
                <div>
                    <h4 className="card-heading">{title}</h4>
                    <p className="txt-sm">{author} | {format}</p>
                </div>
                <p>
                    <span>₹{discountedPrice} </span>
                    <span className="txt-sm txt-red txt-linethrough">₹{originalPrice}</span>{" "}
                    <span className="txt-sm txt-green">{discount}% off</span>
                </p> 
            </div>
            
            <button 
                className={`txt-sm btn btn-block btn-primary btn-wt-icon btn-sq addToCart-btn ${inStock ? "" : "btn-disabled"}`}
                onClick={addToCartFunction}
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
                className="link-prod-det txt-sm btn btn-block btn-outline btn-sq"
                onClick={() => navigate(`/product/${_id}`)}
            >
                View Details
            </button>
        </div>
    );
}

