import "./order-confirmation.css";
import { Link } from "react-router-dom";

export const OrderConfirmation = () => {
    return (
        <div className="main-wrapper">
            <div className="main-container oc-container">
                <div className="main-header flex-row flex_justify-center">
                    <h1 className="main-heading txt-underline">Order Confirmation</h1>
                </div>
                <div className="oc-content flex-col">
                    <p className="txt-bold txt-center confirm-txt">Your Order is Confirmed!!</p>
                    <div className="oc-txt">
                        <p className="txt-center">Your books are on the way.</p>
                        <p className="txt-center">Thankyou for shopping with us :)</p>
                    </div>
                    <Link 
                        to={"/home"}
                        className="link-noDecoration btn btn-wt-icon btn-primary btn-sq"
                    >
                        <span>Continue shopping</span>
                        <i className="fa-solid fa-angles-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}