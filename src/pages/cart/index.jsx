import "./cart.css";
import { CartPriceDetails, HrCardListing } from "../../components";

export const Cart = () => {

    return(
        <div className="cart-wrapper grid grid-31layout">
            <HrCardListing
                inCart={true}
            />
            <CartPriceDetails />
        </div>
    );
}