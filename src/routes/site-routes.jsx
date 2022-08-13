import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { 
    NotFound, 
    Signup, 
    Login, 
    Home, 
    Account, 
    Bookstore, 
    ProductDisplay,
    Wishlist,
    Cart,
    Checkout,
    Bestsellers,
    TodaysDeals,
    Bookclub
} from "../pages";

export const SiteRoutes = () => {
    return(
        <Routes>
            <Route path="/mockman" element={<Mockman />} />            
            <Route path="*" element={<NotFound />} />            
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />            
            <Route path="/" element={<Home />} />            
            <Route path="/home" element={<Home />} />            
            <Route path="/account" element={<Account />} />            
            <Route path="/bookstore" element={<Bookstore />} />            
            <Route path="/product" element={<ProductDisplay />} />            
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/bestsellers" element={<Bestsellers />} />
            <Route path="/today's-deals" element={<TodaysDeals />} />
            <Route path="/book-club" element={<Bookclub />} />
        </Routes>
    );
}