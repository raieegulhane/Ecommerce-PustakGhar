import "./discount-display.css"
import { DiscountCard } from "./discount-card";
import { discountList } from "./discount-list";

export const DiscountDisplay = () => {
    return(
        <div className="disc-wrapper">
            <h1 className="disc-heading">Discounts you can't miss!!!</h1>
            <section className="flex-row flex_justify-se">
                {
                    discountList.map(({ _id, img, description}) => {
                        return(
                            <DiscountCard 
                                key={_id}
                                src={img}
                                description={description}
                            />
                        );
                    })
                }
            </section>
        </div>
    );
}