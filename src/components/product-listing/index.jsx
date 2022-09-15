import "./product-listing.css";
import { ProductCardVr } from "../../components";


export const ProductListing = ({ title, productList }) => {
    
    return(
        <div className="prod-list-wrapper">
            <div className="prod-list-header flex-row flex_justify-center">
                <h1 className="product_heading txt-underline">{title}</h1>
            </div>

            <div className="prod-list-container flex-row flex_justify-center">
                {
                    productList.map((product) => {
                        const { 
                            _id, 
                            title, 
                            author, 
                            originalPrice, 
                            discountedPrice, 
                            discount, 
                            stars, 
                            totalRatings, 
                            format,
                            inStock, 
                            bestSeller, 
                            coverImage 
                        } = product
                        return(
                            <ProductCardVr 
                                product={product}
                                key={_id}
                                _id={_id}
                                title={title}
                                author={author}
                                originalPrice={originalPrice}
                                discountedPrice={discountedPrice}
                                discount={discount}
                                stars={stars}
                                totalRatings={totalRatings}
                                format={format}
                                inStock={inStock}
                                bestSeller={bestSeller}
                                coverImage={coverImage}
                            />
                        );
                    }) 
                }

                {
                    productList.length < 1 &&
                    <p>Sorry! Products you are searching for are unavailable at the moment.</p>
                }
            </div>
        </div>
    );
}