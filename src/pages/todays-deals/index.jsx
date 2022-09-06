import { useProduct } from "../../contexts";
import { ProductListing } from "../../components";


export const TodaysDeals = () => {

    const { productState: { productList }} = useProduct();

    const todaysDealsList = [ ...productList ].filter((item) => item.discount >= 40)

    return(
        <div className="bestseller-wrapper">
            <div className="bestseller-container">
                <ProductListing 
                    title={"Today's Deals - 40% and Up Discounts!!"}
                    productList={todaysDealsList}
                />
            </div>
        </div>
    );
}