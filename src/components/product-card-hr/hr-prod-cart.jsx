import "./product-card-hr.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useCart } from "../../contexts";
import { 
    addToWishlistService, 
    deleteFromCartService, 
    getProductQtyService 
} from "../../services";

export const CartCardHr = ({ product }) => {
    const {
        _id,
        id,
        title,
        author,
        originalPrice,
        discountedPrice,
        discount,
        format,
        coverImage,
        qty,
    } = product;

    const navigate = useNavigate();

    const { authState: { authToken }} = useAuth();
    const { cartState: { wishlist }, cartDispatch } = useCart();
    const [ inWishlist, setInWishlist ] = useState(false);

    useEffect (() => {
        if (wishlist.find((item) => item._id === _id)) {
            setInWishlist(true);
        }
    }, [wishlist, _id]);

    const moveToWishlistFunction = async (event) => {
        event.preventDefault();
        if (inWishlist) {
            navigate("/wishlist");
        } else {
            try {
                const { data: { wishlist }} = await addToWishlistService(product, authToken);
                const { data: { cart }} = await deleteFromCartService(_id, authToken);

                cartDispatch({ type: "SET_WISHLIST", payload: wishlist });
                cartDispatch({ type: "SET_CART", payload: cart });
                setInWishlist(true);
            } catch (error) {
                console.log("ERROR__MOVE_TO_WISHLIST_FROM_CART: ", error);
                toast.error("Problem occured while adding book to wishlist.");
            }
        }
    }

    const deleteFromCartFunction = async (event) => {
        event.preventDefault();
        try {
            const { data: { cart }} = await deleteFromCartService(_id, authToken);
            cartDispatch({ type: "SET_CART", payload: cart });
            toast.info("Book deleted from cart.");
        } catch (error) {
            console.log("ERROR__DELETE_FROM_CART: ", error);
            toast.error("Problem occured while deleting book.");
        }
    }

    const updateProdQtyFunction = async (event, actionType) => {
        event.preventDefault();
		event.stopPropagation();
        try {
            const { data: { cart }} = await getProductQtyService(_id, actionType, authToken);
            cartDispatch({ type: "SET_CART", payload: cart });
        } catch (error) {
            console.log("ERROR__PRODUCT_QTY_UPDATE: ", error);
            toast.error("Error occured white updating the product quantity.");
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
                        <p className="txt-bold txt-sm">{format}</p>
                    </div>
                    <div className="prc-rt-container flex-row flex_align-middle">
                        <div className="price-container flex-row flex_align-middle">
                            <span className="price">₹{discountedPrice}</span> 
                            <span className="off-price txt-gray txt-linethrough">₹{originalPrice}</span> 
                            <span className="off-price txt-green">{discount}% off</span>
                        </div>
                    </div>
                    <div className="flex-row flex_align-middle">
                        <div className="qt-container flex-row flex_align-middle">
                            <button 
                                className={`qt-btn txt-sm btn btn-primary flex flex_justify-center flex_align-middle ${qty > 1 ? "" : "btn-disabled"}`}
                                onClick={(e) => updateProdQtyFunction(e, "decrement")}
                            >
                                <i className="fa-solid fa-minus"></i>
                            </button>
                            <span>{qty}</span>
                            <button 
                                className="qt-btn txt-sm btn btn-primary flex flex_justify-center flex_align-middle"
                                onClick={(e) => updateProdQtyFunction(e, "increment")}
                            >
                                <i className="fa-solid fa-plus"></i>
                            </button>
                        </div>
                        <button 
                            className="del-btn btn btn-link btn-wt-icon"
                            onClick={deleteFromCartFunction}
                        >
                            <i className="fa-solid fa-trash"></i>
                            <span>Delete</span>
                        </button>  
                    </div>  
                </div>

                <div className="cart-btn-container flex-col">
                    <button 
                        className={`txt-sm cart-btn btn btn-primary btn-wt-icon btn-sq ${inWishlist ? "btn-disabled" : ""}`}
                        onClick={moveToWishlistFunction}
                    >
                        <i className="fa-solid fa-heart"></i>
                        <span>
                            {
                                inWishlist ? 
                                "Added to Wishlist" : 
                                "Move to Wishlist"
                            }
                        </span>
                    </button>
                    <button 
                        className="txt-sm cart-btn btn btn-outline btn-wt-icon btn-sq"
                        onClick={() => navigate(`/product/${id}`)}
                    >
                        View Details
                    </button> 
                </div> 
            </div>
        </div>
    );
}