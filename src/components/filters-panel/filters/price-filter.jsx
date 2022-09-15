import { useFilter } from "../../../contexts";

export const PriceFilter = () => {

    const { filterState: { filterByPrice }, filterDispatch } = useFilter();

    return(
        <div>
            <h4>Price</h4>
            <div>
                <input
                    list="tickmarks"
                    type="range"
                    className="price-slider"
                    min="100"
                    max="1600"
                    step="100"
                    value={filterByPrice}
                    onChange={
                        (event) => filterDispatch({ 
                            type: "FILTER_BY_PRICE", 
                            payload: event.target.value 
                        })
                    }
                />
                <datalist 
                    id="tickmarks" 
                    className="price-datalist flex-row txt-sm flex_justify-sb"
                >
                    <option value="100" label="100" />
                    <option value="200" label="" />
                    <option value="300" label="" />
                    <option value="400" label="" />
                    <option value="500" label="" />
                    <option value="600" label="" />
                    <option value="700" label="" />
                    <option value="800" label="" />
                    <option value="900" label="" />
                    <option value="1000" label="" />
                    <option value="1100" label="" />
                    <option value="1200" label="" />
                    <option value="1300" label="" />
                    <option value="1400" label="" />
                    <option value="1500" label="1.5k" />
                    <option value="1600" label="All" />
                </datalist>
            </div>
        </div>
    );
}	