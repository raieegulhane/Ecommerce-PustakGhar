import "./account.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts";

export const Account = () => {
    const navigate = useNavigate();

    const { authState: { userData }, authDispatch } = useAuth();
    const { firstName, lastName, email } = userData;

    const logoutHandler = () => {
        localStorage.removeItem("auth-token");
        localStorage.removeItem("user-data");

        authDispatch({ type: "AUTH_CLEAR" });

        navigate("/login");
        toast.success("Logged out.")
    }

    return(
        <div className="main-wrapper">
            <div className="main-container container-75">
                <div className="main-header flex-row flex_justify-center">
                    <h1 className="main-heading txt-underline">User Account</h1>
                </div>

                <div className="acc-content-container flex-col flex_align-middle">
                    <div className="avatar-border-outer avatar-circle">
                        <div className="avatar-char avatar-circle avatar-lg avatar-border">
                            {`${firstName[0]}${lastName[0]}`}
                        </div>
                    </div>

                    <div className="acc-user-details flex-col flex_align-middle">
                        <p className="acc-user-name">
                            {`${firstName} ${lastName}`}
                        </p>
                        <p>{email}</p>

                        <button 
                            className="acc-logout-btn btn btn-link btn-wt-icon"
                            onClick={logoutHandler}
                        >
                            <span>Logout</span>
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </button>
                    </div>

                    <div className="empty-list-btn-container flex-row flex_justify-sb">
                        <Link
                            to={"/cart"}
                            className="empty-list-btn btn btn-primary btn-sq btn-wt-icon link-noDecoration"
                        >
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span>Go to Cart</span>
                        </Link>
                        <Link
                            to={"/wishlist"}
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