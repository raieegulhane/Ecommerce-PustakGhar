import { NavLink, Link } from "react-router-dom";
import "./profile-dropdown.css";

export const ProfileDropdown = ({ onClick }) => {
    return(
        <div className="profile-dd-wrapper">
            <div className="profile-dd-container flex-col flex_align-start">
                <i class="fa-solid fa-caret-up tri-dd-icon"></i>
                <button 
                    className="btn btn-icon dd-close-btn"
                    onClick={onClick}
                >
                    <i class="fa-solid fa-xmark dd-close-i"></i>
                </button>
                
                <section className="dd-sec flex-col">
                    <section>
                        <p className="username-display">Hello User</p>
                        <p className="email-display">email@example.com</p>
                    </section>

                    <Link to={"/login"}
                        className="link-noDecoration btn-wt-icon btn btn-outline btn-sq dd-btn"
                        onClick={onClick}
                    >
                        <span>Login</span>
                        <i class="fa-solid fa-user-astronaut"></i>
                    </Link>
                </section>

                <NavLink 
                    to="./account" 
                    className="dd-link btn-wt-icon"
                    onClick={onClick}
                >
                    <span>My Account</span>
                    <i class="fa-solid fa-angles-right"></i>
                </NavLink>
            </div>
        </div>
    );
}