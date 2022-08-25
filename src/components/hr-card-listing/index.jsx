import "./hr-card-listing.css";
import { useCart } from "../../contexts";
import { ProductCardHr } from "../../components";


export const HrCardListing = ({ inCart, inWishlist }) => {

    const { cartState: { cart, wishlist } } = useCart();

    return(
        <div className="hr-cl-wrapper">
            <div className="hr-cl-header prod-list-header flex-row flex_justify-center">
                <h1 className="product_heading txt-underline">
                    { inCart ? "Shopping Cart" : "Wishlist"}
                </h1>
            </div>

            <div className="hr-cl-container">
                {
                    inCart &&
                    cart.map((product) => {
                        const {
                            _id,
                            title,
                            author,
                            originalPrice,
                            discountedPrice,
                            discount,
                            format,
                            coverImage,
                            productQuantity,
                        } = product;

                        return(
                            <ProductCardHr
                                key={_id}
                                _id={_id}
                                product={product}
                                title={title}
                                author={author}
                                originalPrice={originalPrice}
                                discountedPrice={discountedPrice}
                                discount={discount}
                                format={format}
                                coverImage={coverImage}
                                productQuantity={productQuantity}
                                inCart={inCart}
                                inWishlist={inWishlist}
                            />
                        );
                    })
                }

                {
                    inWishlist &&
                    wishlist.map((product) => {
                        const {
                            _id,
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
                            coverImage,
                        } = product;

                        return(
                            <ProductCardHr
                                key={_id}
                                _id={_id}
                                product={product}
                                title={title}
                                author={author}
                                originalPrice={originalPrice}
                                discountedPrice={discountedPrice}
                                discount={discount}
                                genre={genre}
                                stars={stars}
                                totalRatings={totalRatings}
                                format={format}
                                inStock={inStock}
                                coverImage={coverImage}
                                inCart={inCart}
                                inWishlist={inWishlist}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
} 