import "./cart-price-details.css";


export const CartPriceDetails = () => {
    return(
        <div className="cart-price-wrapper flex-col">
            <h2 className="cp-heading">Price Details</h2>

            <ul className="cp-list list-noBullets flex-col">
                <li className="flex-row flex_justify-sb">
                    <p>Price (<span>3</span> Items)</p>
                    <p>₹ <span>1797</span></p>
                </li>
                <li className="flex-row flex_justify-sb">
                    <p>Discounts</p>
                    <p className="txt-green">-₹ <span>1347</span></p>
                </li>
                <li className="flex-row flex_justify-sb">
                    <p>Delivery Charges</p>
                    <p><span className="txt-linethrough">₹ 45</span> <span className="txt-green">Free</span></p>
                </li>
            </ul>

            <div className="cp-total flex-row flex_justify-sb">
                <p className="txt-bold">Total Amount</p>
                <p className="txt-bold">₹ <span className="total_price">495</span></p>
            </div>

            <button className="cp-btn btn btn-primary btn-block btn-sq">
                Proceed to Payment
            </button>
        </div>
    );
}