import "./navbar.css";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import NavbarLogo from "../../assets/logos/pg-logo-main.svg";
import { ProfileDropdown } from "./profile-dropdown";


export const Navbar = () => {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    const navPriActiveClass = ({ isActive }) => {
        return isActive ? 
            "nav-pri-item nav-pri-item-selected flex-col flex_justify-center flex_align-middle" : 
            "nav-pri-item flex-col flex_justify-center flex_align-middle";
    }

    const navSecActiveClass = ({ isActive }) => {
        return isActive ? 
            "nav-sec-item nav-sec-item-selected":
            "nav-sec-item";
    }


    return(
        <nav className="nav-wrapper ">
            {/* primary nav */}
            <div className="nav-pri-container flex-row flex_align-middle">
                <div className="nav-pri-sec1 flex-row flex_justify-center flex_align-middle">
                    <Link to="/" className="link-noDecoration">
                        <img src={NavbarLogo} alt="PustakGhar logo" />
                    </Link>
                    <ul className="nav-pri-list flex-row">
                        <li>
                            <NavLink 
                                to="/home"
                                className={navPriActiveClass}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/bookstore"
                                className={navPriActiveClass}
                            >
                                Bookstore
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="search-box-wrapper">
                    <div className="search-box-container flex-row flex_align-middle">
                        <input 
                            className="search-box"
                            type="text"
                            placeholder="Search for books, authors and more..." 
                            // value
                            // onChange
                        />
                        <i className="fa-solid fa-magnifying-glass nav-search-icon"></i>
                    </div>
                </div>

                <ul className="nav-pri-list nav-pri-sec2 flex-row">
                    <li>
                        <div 
                            className={`profile-dd-btn nav-pri-item flex-col flex_justify-center flex_align-middle}`}
                            onClick={() => (setShowProfileDropdown(!showProfileDropdown))}    
                        >
                            <i className="fa-solid fa-user nav-pri-icon"></i>
                            <span className="nav-pri-txt">Account</span>
                        </div>
                        {
                            showProfileDropdown &&
                            <ProfileDropdown />
                        }
                    </li>
                    <li>
                        <NavLink 
                            to="/wishlist" 
                            className={navPriActiveClass}
                        >
                            <i className="fa-solid fa-heart nav-pri-icon"></i>
                            <span className="nav-pri-txt">Wishlist</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/cart" 
                            className={navPriActiveClass}
                            
                        >
                            <i className="fa-solid fa-cart-shopping nav-pri-icon"></i>
                            <span className="nav-pri-txt">Cart</span>
                        </NavLink>
                    </li>
                </ul>
            </div>


            {/* secondary nav */}
            <div className="nav-sec-container flex-row flex_justify-sb flex_align-middle">
                <ul className="list-noBullets flex-row flex_align-middle">
                    <li>
                        <NavLink
                            to="./bookstore" 
                            className="nav-sec-item"
                        >
                            <span className="txt-bold">ALL CATEGORIES</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="./bestsellers"
                            className={navSecActiveClass}
                        >
                            Bestsellers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="./today's-deals"
                            className={navSecActiveClass}
                        >
                            Today's Deals
                        </NavLink>
                    </li>
                </ul>

                <NavLink
                    to="./book-club" 
                    className={navSecActiveClass}
                >
                    <span className="txt-bold">JOIN OUR BOOKCLUB TODAY!!!</span>
                </NavLink>
            </div>
        </nav>
    );
}