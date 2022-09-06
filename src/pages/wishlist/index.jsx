import "./wishlist.css";
import { WishlistHrCardListing } from "../../components";

export const Wishlist = () => {
    return(
        <div className="wl-wrapper">
            <div className="wl-container">
                <WishlistHrCardListing/>
            </div>
        </div>
    );
}