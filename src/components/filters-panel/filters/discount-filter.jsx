import { discount } from "./filters-list";
import { useFilter } from "../../../contexts";


export const DiscountFilter = () => {

    const { filterState: { filterByDiscount }, filterDispatch } = useFilter();

    return(
        <div>
            <h4>Discount</h4>
            <ul className="list-noBullets">
                {
                    discount.map(({ _id, discountOption, htmlFor, value }) => {
                        return(
                            <li key={_id}>
                                <label 
                                    className="filter-item flex-row"
                                    htmlFor={htmlFor}
                                >
                                    <input 
                                        id={htmlFor}
                                        type="radio" 
                                        name="discount"
                                        value={value}
                                        // checked={ filterByDiscount === value}
                                        onChange={
                                            (event) => filterDispatch(
                                                { type: "FILTER_BY_DISCOUNT", payload: event.target.value }
                                            )
                                        }
                                    />
                                    {discountOption}
                                </label>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}