import { NavLink } from "react-router-dom";
import "./profile-dropdown.css";

export const ProfileDropdown = () => {
    return(
        <div className="profile-dd-wrapper">
            <div className="profile-dd-container flex-col flex_align-start">
                <i class="fa-solid fa-caret-up tri-dd-icon"></i>
                <section className="dd-sec flex-col">
                    <section>
                        <p className="username-display">Hello User</p>
                        <p className="email-display">email@example.com</p>
                    </section>

                    <button className="btn btn-outline btn-sq dd-btn">
                        Login/Signup
                    </button>
                </section>

                <NavLink 
                    to="./account" 
                    className="dd-link btn-wt-icon"
                >
                    <span>My Account</span>
                    <i class="fa-solid fa-angles-right"></i>
                </NavLink>
            </div>
        </div>
    );
}