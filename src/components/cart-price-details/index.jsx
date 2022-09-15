import "./cart-price-details.css";
import { useCart } from "../../contexts";


export const CartPriceDetails = () => {

    const { 
        cartState: { 
            cartQuantity, 
            cartPrice, 
            cartDiscount, 
            cartTotal
        }
    } = useCart();
    
    return(
        <div className="cart-price-wrapper flex-col">
            <h2 className="cp-heading">Price Details</h2>

            <ul className="cp-list list-noBullets flex-col">
                <li className="flex-row flex_justify-sb">
                    <p>Price (<span>{cartQuantity}</span> Items)</p>
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

            <button className="cp-btn btn btn-primary btn-block btn-sq">
                Proceed to Payment
            </button>
        </div>
    );
}