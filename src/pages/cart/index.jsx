import "./cart.css";
import { useCart } from "../../contexts";
import { CartPriceDetails, CartHrCardListing } from "../../components";

export const Cart = () => {

    const { cartState: { cart }} = useCart();
    
    return(
        <div className="main-wrapper">
            <div className={`cart-container ${cart.length > 0 ? "grid grid-31layout" : "container-75"}`}>
                <CartHrCardListing />
                {
                    cart.length > 0 &&
                    <CartPriceDetails 
                        inCart={true}
                        inCheckout={false}
                    />
                }
            </div>
        </div>
    );
}