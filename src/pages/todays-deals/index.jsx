import { products } from "../../backend/db/products";
import { ProductListing } from "../../components";


export const TodaysDeals = () => {

    const todaysDealsList = products.filter((item) => item.discount >= 40)

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