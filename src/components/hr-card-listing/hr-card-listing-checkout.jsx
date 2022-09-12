import "./hr-card-listing.css";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts";
import { CheckoutCardHr } from "../../components";


export const CheckoutHrCardListing = () => {

    const { cartState: { cart }} = useCart();

    return(
        <div>
            {
                cart.map((product) => {
                    return(
                        <CheckoutCardHr
                            key={product._id}
                            product={product}
                        />
                    );
                })
            }
        </div>
    );
} 