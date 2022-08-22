import "./cart.css";
import { ProductCardHr } from "../../components";

export const Cart = () => {
    return(
        <div className="cart-wrapper grid grid-31layout">
            <div className="cart-prod-container">
                <ProductCardHr />
            </div>
        </div>
    );
}