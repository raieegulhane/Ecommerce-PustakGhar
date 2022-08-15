import "./product-card-vr.css";

export const ProductCardVr = ({ 
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

    return(
        <div className="card_container card-vr">
            {
                bestSeller &&
                <div className="badge badge-sq">Bestseller</div>
            }
            {
                !inStock &&
                <div className="card_overlay">
                    <p>Out Of Stock</p>
                </div>
            }

            <img 
                className="card-img image-100pr" 
                src={coverImage} 
                alt={title} 
            />

            <button className="btn-icon wishlist-btn">
                <i className="wishlist-icon fa-solid fa-heart"></i>
            </button>

            <div className="card_content flex-col">
                <div>
                    <h4 className="card-heading">{title}</h4>
                    <p className="txt-sm">{author} | {format}</p>
                </div>
                <div className="rating_block-dark txt-sm">  
                    <i className="fa-solid fa-star"></i>                                                                 
                    {stars} | {totalRatings}
                </div> 
                <p>
                    <span>₹{discountedPrice} </span>
                    <span className="txt-sm txt-red txt-linethrough">₹{originalPrice}</span>{" "}
                    <span className="txt-sm txt-green">{discount}% off</span>
                </p> 
            </div>
            
            <button className="txt-sm btn btn-block btn-primary btn-wtIcon btn-sq addToCart-btn">
                <i className="fa-solid fa-cart-shopping"></i>{" "}
                Add to Cart
            </button>
        </div>
    );
}

