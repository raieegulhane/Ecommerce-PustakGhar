export const otherFiltersFunction = (productList, filter) => {

    const { bestSeller, inStock } = filter;

    if (
        bestSeller === false &&
        inStock === false
    ) {
        return([ ...productList ]);
    }

    const filteredProductList = [];

    if (bestSeller) {
        const filteredData = [ ...productList ].filter(
            (item) => item.bestSeller === true
        );

        filteredProductList.push(...filteredData);
    }

    if (inStock) {
        const filteredData = [ ...productList ].filter(
            (item) => item.inStock === true
        );

        filteredProductList.push(...filteredData);
    }

    return([ ...filteredProductList ]);
}