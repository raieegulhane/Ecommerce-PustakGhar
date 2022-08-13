export const PriceFilter = () => {
    return(
        <div>
            <h4>Price</h4>
            <div>
                
                <input
                    list="tickmarks"
                    type="range"
                    className="price-slider"
                    min="100"
                    max="1000"
                    step="100"
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
                    <option value="1000" label="1k" />
                </datalist>
            </div>
        </div>
    );
}	