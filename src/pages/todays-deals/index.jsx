import { useProduct } from "../../contexts";
import { ProductListing } from "../../components";

export const TodaysDeals = () => {
    const { productState: { productList }} = useProduct();
    const todaysDealsList = [ ...productList ].filter((item) => item.discount >= 40)

    return(
        <div className="main-wrapper">
            <div className="container-75">
                <ProductListing 
                    title={"Today's Deals - 40% and up discounts!!"}
                    productList={todaysDealsList}
                    searchInput={0}
                />
            </div>
        </div>
    );
}