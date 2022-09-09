import "./cart-price-details.css";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts";
import { getCartPricingDetails } from "../../utility-functions";

export const CartPriceDetails = () => {
    const { cartState: { cart } } = useCart();
    const { cartQty, cartPrice, cartDiscount, cartTotal } = getCartPricingDetails(cart);

    return(
        <div className="cart-price-wrapper flex-col">
            <h2 className="cp-heading">Price Details</h2>

            <ul className="cp-list list-noBullets flex-col">
                <li className="flex-row flex_justify-sb">
                    <p>Price (<span>{cartQty}</span> Items)</p>
                    <p>₹ <span>{cartPrice}</span></p>
                </li>
                <li className="flex-row flex_justify-sb">
                    <p>Discounts</p>
                    <p className="txt-green">-₹ <span>{cartDiscount}</span></p>
                </li>
                <li className="flex-row flex_justify-sb">
                    <p>Delivery Charges</p>
                    <p><span className="txt-linethrough">₹ 45</span> <span className="txt-green">Free</span></p>
                </li>
            </ul>

            <div className="cp-total flex-row flex_justify-sb">
                <p className="txt-bold">Total Amount</p>
                <p className="txt-bold">₹ <span className="total_price">{cartTotal}</span></p>
            </div>

            <Link 
                to={"/address"}
                className="link-noDecoration txt-center btn-wt-icon cp-btn btn btn-primary btn-sq"
            >
                Proceed to Buy
                <i className="fa-solid fa-angles-right"></i>
            </Link>
        </div>
    );
}