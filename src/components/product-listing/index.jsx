import "./product-listing.css";
import { ProductCardVr } from "../../components";
import { products } from "../../backend/db/products";

export const ProductListing = () => {
    return(
        <div className="prod-list-wrapper">
            <div class="prod-list-header flex-row flex_justify-center">
                <h1 class="product_heading txt-underline">All Books</h1>
            </div>

            <div className="prod-list-container flex-row flex_justify-center">
                {
                    products.map(({ 
                        _id, 
                        title, 
                        author, 
                        originalPrice, 
                        discountedPrice, 
                        discount, 
                        stars, 
                        totalRatings, 
                        inStock, 
                        bestSeller, 
                        coverImage 
                    }) => {
                        return(
                            <ProductCardVr 
                                key={_id}
                                title={title}
                                author={author}
                                originalPrice={originalPrice}
                                discountedPrice={discountedPrice}
                                discount={discount}
                                stars={stars}
                                totalRatings={totalRatings}
                                inStock={inStock}
                                bestSeller={bestSeller}
                                coverImage={coverImage}
                            />
                        );
                    }) 
                }
            </div>
        </div>
    );
}


// {data.map((item) => (
//     <div className="card_container card-vr">
//         <img className="card_img image-100pr" src={item.coverImage} alt={item.name}/>
//         <button className="btn-icon wishlist-btn">
//             <i class="wishlist-icon fa-solid fa-heart card_icon"></i>
//         </button>
//         <div className="card_content flex-col">
//             <div>
//                 <h4 className="card-heading">{item.title}</h4>
//                 <p className="txt-sm">{item.author}</p>
//             </div>
//             <div class="rating_block-dark txt-sm">  
//                 <i class="fa-solid fa-star"></i>                                                                 
//                 {item.stars} | {item.totalRatings}
//             </div> 
//             <p>
//                 <span>₹{item.discountedPrice} </span>
//                 <span className="txt-sm txt-red txt-linethrough">₹{item.originalPrice}</span>{" "}
//                 <span class="txt-sm txt-green">{item.discount}% off</span>
//             </p> 
//         </div>
//         <button className="txt-sm btn btn-block btn-primary btn-wtIcon btn-sq addToCart-btn">
//             <i className="fa-solid fa-cart-shopping"></i>{" "}
//             Add to Cart
//         </button>
//     </div>
// ))}
