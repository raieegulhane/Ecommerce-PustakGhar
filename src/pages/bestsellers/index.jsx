import "./bestsellers.css";
import { useProduct } from "../../contexts";
import { ProductListing } from "../../components";


export const Bestsellers = () => {

    const { productState: { productList } } = useProduct();

    const bestSellerProducts = [ ...productList ].filter(
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