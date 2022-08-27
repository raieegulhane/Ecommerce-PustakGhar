import "./account.css";
import { Link } from "react-router-dom";


export const Account = () => {

    return(
        <div className="account-wrapper">
            <div className="account-container">
                <div className="prod-list-header flex-row flex_justify-center">
                    <h1 className="product_heading txt-underline">User Account</h1>
                </div>

                <div className="acc-content-container flex-col flex_align-middle">
                    <div className="avatar-border-outer avatar-circle">
                        <div class="avatar-char avatar-circle avatar-lg avatar-border">
                            JD
                        </div>
                    </div>

                    <div className="acc-user-details flex-col flex_align-middle">
                        <p className="acc-user-name">Jane Doe</p>
                        <p>example@email.com</p>

                        <button className="acc-logout-btn btn btn-link btn-wt-icon">
                            <span>Logout</span>
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </button>
                    </div>

                    <div className="empty-list-btn-container flex-row flex_justify-sb">
                        <Link
                            to={"/bookstore"}
                            className="empty-list-btn btn btn-primary btn-sq btn-wt-icon link-noDecoration"
                        >
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span>Go to Cart</span>
                        </Link>
                        <Link
                            to={"/cart"}
                            className="empty-list-btn btn btn-outline btn-sq btn-wt-icon link-noDecoration"
                        >
                            <i className="fa-solid fa-heart"></i>
                            <span>Go to Wishlist</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}