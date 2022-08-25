import "./product-card-vr.css";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts";


export const ProductCardVr = ({ 
    product,
    _id,
    coverImage, 
    title, 
    author, 
    stars, 
    totalRatings, 
    discountedPrice, 
    originalPrice, 
    discount, 
    format, 
    bestSeller, 
    inStock 
}) => {

    const { cartDispatch } = useCart();

    const addToCartFunction = () => {
        cartDispatch({ type: "ADD_TO_CART", payload: product });
    }

    const addToWishlistFunction = () => {
        cartDispatch({ type: "ADD_TO_WISHLIST", payload: product });
    }

    return(
        <div className="card_container card-vr">
            {
                bestSeller &&
                <div className="badge badge-sq">Bestseller</div>
            }
            
            <button 
                className="btn-icon wishlist-btn"
                onClick={addToWishlistFunction}
            >
                <i className="wishlist-icon fa-solid fa-heart"></i>
            </button>

            <div className="img-container card-img flex-col">
                <img 
                    className="card-img image-100pr" 
                    src={coverImage} 
                    alt={title} 
                />
                {
                    !inStock &&
                    <div className="card_overlay">
                        <p>Out Of Stock</p>
                    </div>
                }
                <div className="rating-container rating_block-dark txt-sm txt-bold">  
                    <i className="fa-solid fa-star"></i>                                                                 
                    {stars} | {totalRatings}
                </div> 
            </div>

            <div className="card_content flex-col">
                <div>
                    <h4 className="card-heading">{title}</h4>
                    <p className="txt-sm">{author} | {format}</p>
                </div>
                <p>
                    <span>₹{discountedPrice} </span>
                    <span className="txt-sm txt-red txt-linethrough">₹{originalPrice}</span>{" "}
                    <span className="txt-sm txt-green">{discount}% off</span>
                </p> 
            </div>
            
            <button 
                className={`txt-sm btn btn-block btn-primary btn-wt-icon btn-sq addToCart-btn ${inStock ? "" : "btn-disabled"}`}
                onClick={addToCartFunction}
            >
            {
                inStock &&
                <i className="fa-solid fa-cart-shopping"></i>
            }
            {
                inStock ? 
                <span>Add to Cart</span> :
                <span>Out of Stock</span>
            }
            </button>

            <Link 
                to={`/product/${_id}`}
                className="link-prod-det link-noDecoration"    
            >
                <button className="txt-sm btn btn-block btn-outline btn-sq">
                    View Details
                </button>
            </Link>

        </div>
    );
}

