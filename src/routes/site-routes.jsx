import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { 
    NotFound, 
    Signup, 
    Login, 
    Home, 
    Account, 
    Bookstore, 
    ProductDetails,
    Wishlist,
    Cart,
    Address,
    Checkout,
    OrderConfirmation,
    Bestsellers,
    TodaysDeals
} from "../pages";
import { PrivateRoutes } from ".";


export const SiteRoutes = () => {
    return(
        <Routes>
            <Route path="/mockman" element={<Mockman />} />            

            {/* auth routes */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} /> 

            {/* public routes */}
            <Route path="/" element={<Home />} />            
            <Route path="/home" element={<Home />} />  
            <Route path="/bookstore" element={<Bookstore />} /> 
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/bestsellers" element={<Bestsellers />} />
            <Route path="/today's-deals" element={<TodaysDeals />} />
            <Route path="*" element={<NotFound />} />    

            {/* private routes */}
            <Route path="/" element={<PrivateRoutes />}>
                <Route path="/account" element={<Account />} />            
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/address" element={<Address />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
            </Route>
        </Routes>
    );
}