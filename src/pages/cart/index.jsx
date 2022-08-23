import "./cart.css";
import { CartPriceDetails, ProductCardHr } from "../../components";

export const Cart = () => {

    return(
        <div className="cart-wrapper grid grid-31layout">
            <div className="cart-prod-container">
                <ProductCardHr 
                    inCart={true}
                />
                <ProductCardHr 
                    inCart={true}
                />
                <ProductCardHr 
                    inCart={true}
                />
            </div>
            <CartPriceDetails />
        </div>
    );
}