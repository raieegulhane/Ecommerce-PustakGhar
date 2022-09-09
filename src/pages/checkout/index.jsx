import { useCart, useUserDetails } from "../../contexts";
import { getCartPricingDetails } from "../../utility-functions";

export const Checkout = () => {
    const { cartState: { cart } } = useCart();
    const { cartQty, cartPrice, cartDiscount, cartTotal } = getCartPricingDetails(cart);

    return(
        <div className="main-wrapper">
            <div className="main-container">
                <div className="main-header flex-row flex_justify-center">
                    <h1 className="main-heading txt-underline">Checkout</h1>
                </div>
            </div>
            
        </div>
    );
}