import "./wishlist.css";
import { HrCardListing } from "../../components";


export const Wishlist = () => {
    return(
        <div className="wl-wrapper">
            <div className="wl-container">
                <HrCardListing 
                    inWishlist={true}
                />
            </div>
        </div>
    );
}