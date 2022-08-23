import "./cart.css";
import { CartPriceDetails, ProductCardHr } from "../../components";
import { HrCardListing } from "../../components/hr-card-listing";

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