import "./bestsellers.css";
import { products } from "../../backend/db/products";
import { ProductListing } from "../../components";


export const Bestsellers = () => {

    const bestSellerProducts = [ ...products ].filter(
        (item) => item.bestSeller === true
    )

    return(
        <div className="bestseller-wrapper">
            <div className="bestseller-container">
                <ProductListing 
                    title={"Best Sellers"}
                    productList={bestSellerProducts}
                />
            </div>
        </div>
    );
}