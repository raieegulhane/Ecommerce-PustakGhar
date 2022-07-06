import "./navbar.css";
import NavbarLogo from "../../assets/logos/pg-logo-main.svg";
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
    const navPriActiveClass = ({ isActive }) => {
        return isActive ? 
            "nav-pri-item nav-pri-item-selected flex-col flex_align-middle" : 
            "nav-pri-item flex-col flex_align-middle";
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
                        <i class="fa-solid fa-magnifying-glass nav-search-icon"></i>
                    </div>
                </div>

                <ul className="nav-pri-list nav-pri-sec2 flex-row">
                    <li>
                        <div className="nav-pri-item profile-dd flex-col flex_align-middle">
                            <i className="fa-solid fa-user nav-pri-icon"></i>
                            <span className="nav-pri-txt">Profile</span>
                        </div>
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
            <div className="nav-sec-container flex-row flex_align-middle">
                <ul className="nav-sec-list list-noBullets flex-row">
                    <li>
                        <button className="nav-sec-btn btn-wt-icon">
                            <span className="nav-sec-txt">ALL CATEGORIES</span>
                            <i className="fa-solid fa-angle-down nav-sec-icon"></i>
                        </button>
                    </li>
                    <li>
                        <button className="nav-sec-btn">
                            Best Sellers
                        </button>
                    </li>
                    <li>
                        <button className="nav-sec-btn">
                            Today's Deals
                        </button>
                    </li>
                </ul>

                <button className="bookclub-cta nav-sec-btn nav-sec-txt">
                    JOIN OUR BOOKCLUB TODAY!!!
                </button>
            </div>
        </nav>
    );
}