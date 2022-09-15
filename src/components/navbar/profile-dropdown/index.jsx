import "./profile-dropdown.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../contexts";


export const ProfileDropdown = ({ onClick }) => {
    const navigate = useNavigate();
    const { authState: { isAuth, userData }, authDispatch } = useAuth();
    const { firstName, email } = userData;

    const logoutHandler = () => {
        localStorage.removeItem("auth-token");
        localStorage.removeItem("user-data");

        authDispatch({ type: "AUTH_CLEAR" });

        navigate("/login");
        toast.success("Logged out.")
    }

    return(
        <div className="profile-dd-wrapper">
            <div className="profile-dd-container flex-col flex_align-start">
                <i className="fa-solid fa-caret-up tri-dd-icon"></i>
                <button 
                    className="btn btn-icon dd-close-btn"
                    onClick={onClick}
                >
                    <i className="fa-solid fa-xmark dd-close-i"></i>
                </button>
                
                <section className="dd-sec flex-col">
                    <section>
                        <p className="username-display">
                            Hello {isAuth ? firstName : "User"}!!
                        </p>
                        <p className="email-display">
                            {
                                isAuth ? 
                                email :
                                "Login to your account."
                            }
                        </p>
                    </section>

                    {
                        isAuth ?
                        <button
                            className="link-noDecoration btn-wt-icon btn btn-outline btn-sq dd-btn"
                            onClick={logoutHandler}
                        >
                            <span>Logout</span>
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </button> :
                        <Link 
                            to={"/login"}
                            className="link-noDecoration btn-wt-icon btn btn-outline btn-sq dd-btn"
                            onClick={onClick}
                        >
                            <span>Login</span>
                            <i className="fa-solid fa-user-astronaut"></i>
                        </Link>
                    }
                </section>

                <NavLink 
                    to="./account" 
                    className="dd-link btn-wt-icon"
                    onClick={onClick}
                >
                    <span>My Account</span>
                    <i className="fa-solid fa-angles-right"></i>
                </NavLink>
            </div>
        </div>
    );
}