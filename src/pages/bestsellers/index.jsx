import { useProduct } from "../../contexts";
import { ProductListing } from "../../components";

export const Bestsellers = () => {
    const { productState: { productList } } = useProduct();

    const bestSellerProducts = [ ...productList ].filter(
        (item) => item.bestSeller === true
    )

    return(
        <div className="main-wrapper">
            <div className="container-75">
                <ProductListing 
                    title={"Best Sellers"}
                    productList={bestSellerProducts}
                />
            </div>
        </div>
    );
}