import "./product-card-hr.css";
import { toast } from "react-toastify";
import { useAuth, useCart } from "../../contexts";
import { 
    deleteFromCartService, 
    getProductQtyService 
} from "../../services";

export const CheckoutCardHr = ({ product }) => {
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

    const { authState: { authToken }} = useAuth();
    const { cartDispatch } = useCart();

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
            <div className="checkout-card-container flex-row">
                <img
                    className="card-img image-100pr" 
                    src={coverImage} 
                />

                <div className="flex-col flex_justify-sb">
                    <div>
                        <h4>{title}</h4>
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
                </div>

                <div className="cart-btn-container flex-col">
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
            </div>
        </div>
    );
}