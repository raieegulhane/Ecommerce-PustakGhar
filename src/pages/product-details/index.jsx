import "./product-details.css"
import { Link, useParams } from "react-router-dom";
import { products } from "../../backend/db/products";
import { ratings } from "../../components/filters-panel/filters/filters-list";

export const ProductDetails = () => {

    const { productId } = useParams();

    const getReqProduct = (productList, productId) => {
        return productList.find(({ _id }) => _id === productId);
    }

    const reqProduct = getReqProduct(products, productId);
    const {
        title,
        author,
        originalPrice,
        discountedPrice,
        discount,
        genre,
        stars,
        totalRatings,
        format,
        inStock,
        bestSeller,
        description,
        coverImage
    } = reqProduct;

    return(
        <div className="prod-details-wrapper">
            <Link 
                to={"/bookstore"}
                className="back-link link-noDecoration btn-link btn-wt-icon"
            >
                <i className="fa-solid fa-angles-left"></i>
                Back To Bookstore
            </Link>
            
            <div className="prod-details-container flex-row">
                <section className="prod-img-container flex-col">
                    
                    <img 
                        className="card-img image-100pr" 
                        src={coverImage} 
                        alt={title} 
                    />
                </section>

                <section className="prod-des-container flex-col">
                    <div className="prod-header">
                        <h1 className="heading-md">{title}</h1>
                        <p>by <span className="prod-author">{author}</span></p>

                        <p className="star-container flex-row flex_align-bottom">
                            <span>
                                {[...Array(5)].map((star, index) => { 
                                    if ((stars-(index)) > 0) {
                                        if ((stars-(index)) < 1) {
                                            return(
                                                <i className="star-icon fa-regular fa-star-half-stroke"></i>
                                            );
                                        }
                                        return(
                                            <i className="star-icon fa-solid fa-star"></i>
                                        ); 
                                    } else {
                                        return(
                                            <i className="star-icon fa-regular fa-star"></i>
                                        );
                                    }
                                })}
                            </span>
                            <span className="txt-sm">{stars} | {totalRatings} total ratings</span>
                        </p>
                    </div>

                    <div className="prod-des flex-col">
                        {
                            bestSeller &&
                            <div className="bestseller-tag">#1 Best Seller</div>
                        }
                        <p className="txt-bold">
                            <span>
                                {
                                    genre.map((genreName, index) => {
                                        if (index+1 === genre.length) {
                                            return(
                                                <span className="genre-name">{genreName} </span>
                                            );
                                        } 
                                        
                                        return(
                                            <span className="genre-name">{genreName}, </span>
                                        );
                                    })
                                }
                            </span> | <span>{format}</span>
                        </p>

                        <p>{description}</p>

                        <div className="flex-col">
                            {
                                !inStock &&
                                <div className="out-of-stock-tag">Out of Stock</div>
                            }
                            <p><span className="txt-md">₹{discountedPrice}</span></p>
                            <p><span className="txt-sm">M.R.P.:</span> <span className="txt-red txt-linethrough">₹{originalPrice}</span></p>
                            <p>Save ₹{`${originalPrice - discountedPrice}`} <span className="txt-green">({discount}% off)</span></p>
                        </div>
                    </div>

                    <div className="prod-det-btn-container flex-row flex_justify-center">
                        <button className={`btn btn-primary btn-wt-icon btn-sq prod-det-btn ${inStock ? "" : "btn-disabled"}`}>
                            <i className="fa-solid fa-cart-shopping"></i>{" "}
                            Add to Cart
                        </button>
                        <button className="btn btn-outline btn-wt-icon btn-sq prod-det-btn">
                            <i class="fa-solid fa-heart"></i>
                            Add to Wishlist
                        </button>
                    </div>
                </section>
            </div>

            
        </div>
    );
}