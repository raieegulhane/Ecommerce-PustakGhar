import "./product-listing.css";
import { ProductCardVr } from "../../components";
import { products } from "../../backend/db/products";
import { useFilter } from "../../contexts";
import { getFilteredAndSortedProductsFunction } from "../../utility-functions";


export const ProductListing = () => {
    const { filterState } = useFilter();
    const filteredAndSortedProducts = getFilteredAndSortedProductsFunction(products, filterState);

    return(
        <div className="prod-list-wrapper">
            <div class="prod-list-header flex-row flex_justify-center">
                <h1 class="product_heading txt-underline">All Books</h1>
            </div>

            <div className="prod-list-container flex-row flex_justify-center">
                {
                    filteredAndSortedProducts.map(({ 
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