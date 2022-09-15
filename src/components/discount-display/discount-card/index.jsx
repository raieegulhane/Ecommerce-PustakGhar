import "./discount-card.css";
import { Link } from "react-router-dom";

export const DiscountCard = ({ src, description }) => {
    return(
        <div className="disc-card-wrapper flex-col flex_align-middle">
            <img className="img-100pr img-sq" src={src} alt="books" />
            <p className="disc-txt">{description}</p>
            <Link to="/bookstore" className="btn-link">Shop Now</Link>
        </div>
    );
}