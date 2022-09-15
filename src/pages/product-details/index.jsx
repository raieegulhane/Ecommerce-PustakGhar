import "./product-details.css"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCartService, addToWishlistService, getProductByIdService } from "../../services";
import { useAuth, useCart } from "../../contexts";

export const ProductDetails = () => {
    const navigate = useNavigate();

    const { productId } = useParams();
    const { authState: { isAuth, authToken }} = useAuth();
    const { cartState: { cart, wishlist }, cartDispatch } = useCart();
    const [ currentProduct, setCurrentProduct ] = useState({});
    const {
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
        bestSeller,
        description,
        coverImage
    } = currentProduct;
    const [ inCart, setInCart ] = useState(false);
    const [ inWishlist, setInWishlist ] = useState(false);

    const fetchProduct = async () => {
        try {
            const { data: { product }} = await getProductByIdService(productId);
            setCurrentProduct({ ...product });
        } catch (error) {
            console.log("ERROR__PRODUCT_DETAILS: ", error);
            toast.error("Problem occured while loading details.")
        }
    }

    useEffect (() => {
        fetchProduct()
    }, [productId]);

    useEffect (() => {
        if (cart.find((item) => item._id === productId)) {
            setInCart(true);
        }
        if (wishlist.find((item) => item._id === productId)) {
            setInWishlist(true);
        }
    }, [productId]);

    const addToCartFunction = async () => {
        if (inCart) {
            navigate("/cart");
        } else {
            if (!isAuth) {
                toast.info("Please login to continue.");
                return navigate("/login", { state: { from: `/product/${productId}` } });
            }

            try {
                const { data: { cart }} = await addToCartService(currentProduct, authToken);
                cartDispatch({ type: "SET_CART", payload: cart });
                setInCart(true);
                toast.success("Book added to cart.");
            } catch (error) {
                console.log("ERROR__ADD_TO_CART_FROM_PROD_DETAILS: ", error);
                toast.error("Problem occured while adding to cart.");
            }
        } 
    }

    const addToWishlistFunction = async () => {
        if (!isAuth) {
            navigate("/login");
            toast.info("Please login to continue.");
        }

        try {
            const { data: { wishlist }} = await addToWishlistService(currentProduct, authToken);
            cartDispatch({ type: "SET_WISHLIST", payload: wishlist });
            setInWishlist(true);
            toast.success("Book added to wishlist.");
        } catch (error) {
            console.log("ERROR__ADD_TO_CART_FROM_PROD_DETAILS: ", error);
            toast.error("Problem occured while adding to cart.");
        }
    }

    return(
        <div className="prod-details-wrapper">
            <button 
                className="back-link btn-link btn-wt-icon"
                onClick={() => navigate(-1)}
            >
                <i className="fa-solid fa-angles-left"></i>
                Back
            </button>
            
            <div className="prod-details-container flex-row">
                <section className="prod-img-container flex-col">
                    
                    <img 
                        className="card-img image-100pr" 
                        src={coverImage} 
                        alt={title} 
                    />
                </section>

                <section className="prod-des-container flex-col">
                    <div className="prod-header">
                        <h1 className="heading-md">{title}</h1>
                        <p>by <span className="prod-author">{author}</span></p>

                        <p className="star-container flex-row flex_align-bottom">
                            <span>
                                {[...Array(5)].map((star, index) => { 
                                    if ((stars-(index)) > 0) {
                                        if ((stars-(index)) < 1) {
                                            return(
                                                <i className="star-icon fa-regular fa-star-half-stroke"></i>
                                            );
                                        }
                                        return(
                                            <i className="star-icon fa-solid fa-star"></i>
                                        ); 
                                    } else {
                                        return(
                                            <i className="star-icon fa-regular fa-star"></i>
                                        );
                                    }
                                })}
                            </span>
                            <span className="txt-sm">{stars} | {totalRatings} total ratings</span>
                        </p>
                    </div>

                    <div className="prod-des flex-col">
                        {
                            bestSeller &&
                            <div className="bestseller-tag">#1 Best Seller</div>
                        }
                        <p className="txt-bold">
                            <span>
                                {
                                    genre?.map((genreName, index) => {
                                        if (index + 1 === genre.length) {
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

                        <p>{description}</p>

                        <div className="flex-col">
                            {
                                !inStock &&
                                <div className="out-of-stock-tag">Out of Stock</div>
                            }
                            <p><span className="txt-md">₹{discountedPrice}</span></p>
                            <p><span className="txt-sm">M.R.P.:</span> <span className="txt-red txt-linethrough">₹{originalPrice}</span></p>
                            <p>Save ₹{`${originalPrice - discountedPrice}`} <span className="txt-green">({discount}% off)</span></p>
                        </div>
                    </div>

                    <div className="prod-det-btn-container flex-row flex_justify-center">
                        <button 
                            className={`btn btn-primary btn-wt-icon btn-sq prod-det-btn ${inStock ? "" : "btn-disabled"}`}
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
                            className={`btn btn-outline btn-wt-icon btn-sq prod-det-btn ${inWishlist ? "btn-disabled" : ""}`}
                            onClick={addToWishlistFunction}
                        >
                            <i className="fa-solid fa-heart"></i>
                            {
                                inWishlist ?
                                <span>Book in Wishlist</span> :
                                <span>Add to Wishlist</span>
                            }
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}