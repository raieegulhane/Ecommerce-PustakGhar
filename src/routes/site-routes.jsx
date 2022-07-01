import { Routes, Route } from "react-router-dom";
import { Mockman } from "mockman-js";
import { 
    NotFound, 
    Signup, 
    Login, 
    Home, 
    Profile, 
    ProductListing, 
    ProductDisplay,
    Wishlist,
    Cart,
    Checkout
} from "../pages";

export const SiteRoutes = () => {
    return(
        <Routes>
            <Route path="/mockman" element={<Mockman />} />            
            <Route path="/not-found" element={<NotFound />} />            
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />            
            <Route path="/" element={<Home />} />            
            <Route path="/home" element={<Home />} />            
            <Route path="/profile" element={<Profile />} />            
            <Route path="/product-listing" element={<ProductListing />} />            
            <Route path="/product-display" element={<ProductDisplay />} />            
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
    );
}