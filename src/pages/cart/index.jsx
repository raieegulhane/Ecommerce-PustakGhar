import "./cart.css";
import { useCart } from "../../contexts";
import { CartPriceDetails, HrCardListing } from "../../components";

export const Cart = () => {

    const { cartState: { cart} } = useCart();
    
    return(
        <div className="cart-wrapper">
            <div className={`cart-container ${cart.length > 0 ? "grid grid-31layout" : "empty-cart-container"}`}>
                <HrCardListing
                    inCart={true}
                />
                
                {
                    cart.length > 0 &&
                    <CartPriceDetails />
                }
            </div>
        </div>
    );
}