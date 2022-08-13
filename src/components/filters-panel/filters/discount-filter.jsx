import { discount } from "./filters-list";


export const DiscountFilter = () => {
    return(
        <div>
            <h4>Discount</h4>
            <ul className="list-noBullets">
                {
                    discount.map(({ _id, discount }) => {
                        return(
                            <li key={_id}>
                                <label className="filter-item flex-row">
                                    <input 
                                        type="radio" 
                                        name="discount"
                                    />
                                    {discount}
                                </label>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}