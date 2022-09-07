import "./navbar.css";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import NavbarLogo from "../../assets/logos/pg-logo-main.svg";
import { useAuth, useCart } from "../../contexts";
import { ProfileDropdown } from "./profile-dropdown";

export const Navbar = () => {

    const { authState: { isAuth } } = useAuth();
    const { cartState: { cart, wishlist } } = useCart();

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
                    <Link 
                        to="/" className="link-noDecoration"
                        onClick={() => (setShowProfileDropdown(false))}    
                    >
                        <img src={NavbarLogo} alt="PustakGhar logo" />
                    </Link>
                    <ul className="nav-pri-list flex-row">
                        <li>
                            <NavLink 
                                to="/home"
                                className={navPriActiveClass}
                                onClick={() => (setShowProfileDropdown(false))}    
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/bookstore"
                                className={navPriActiveClass}
                                onClick={() => (setShowProfileDropdown(false))}    
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
                            className="profile-dd-btn nav-pri-item flex-col flex_justify-center flex_align-middle"
                            onClick={() => (setShowProfileDropdown(!showProfileDropdown))}    
                        >
                            <i className="fa-solid fa-user nav-pri-icon"></i>
                            <span className="nav-pri-txt">Account</span>
                        </div>
                        {
                            showProfileDropdown &&
                            <ProfileDropdown 
                                onClick={() => (setShowProfileDropdown(false))}
                            />
                        }
                    </li>
                    <li>
                        <NavLink 
                            to="/wishlist" 
                            className={navPriActiveClass}
                            onClick={() => (setShowProfileDropdown(false))}    
                        >
                            <div className="acc-cart-link flex-col">
                                {
                                    isAuth && wishlist.length > 0 &&
                                    <div className="wishlist-badge badge badge-cr flex flex_align-middle flex_justify-center">
                                        {wishlist.length}
                                    </div>
                                }
                                <i className="fa-solid fa-heart nav-pri-icon"></i>
                                <span className="nav-pri-txt">Wishlist</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/cart" 
                            className={navPriActiveClass}
                            onClick={() => (setShowProfileDropdown(false))}    
                        >
                            <div className="acc-cart-link flex-col">
                                {
                                    isAuth && cart.length > 0 &&
                                    <div className="cart-badge badge badge-cr flex flex_align-middle flex_justify-center">
                                        {cart.length}
                                    </div>
                                }
                                <i className="fa-solid fa-cart-shopping nav-pri-icon"></i>
                                <span className="nav-pri-txt">Cart</span>
                            </div>
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
                            onClick={() => (setShowProfileDropdown(false))}    
                        >
                            <span>All Categories</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="./bestsellers"
                            className={navSecActiveClass}
                            onClick={() => (setShowProfileDropdown(false))}    
                        >
                            Bestsellers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="./today's-deals"
                            className={navSecActiveClass}
                            onClick={() => (setShowProfileDropdown(false))}    
                        >
                            Today's Deals
                        </NavLink>
                    </li>
                </ul>

                <div
                    to="./book-club" 
                    className="nav-sec-item item-no-hov"
                >
                    <span className="txt-bold">JOIN OUR BOOKCLUB TODAY!!!</span>
                </div>
            </div>
        </nav>
    );
}