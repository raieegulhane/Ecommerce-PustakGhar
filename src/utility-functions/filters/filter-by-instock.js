export const filterByInStockFunction = (productList, filter) => {
    const { inStock } = filter;

    if (inStock) {
        return(
            [ ...productList ].filter(
                (item) => item.inStock === true
            )
        );
    }

    return([ ...productList ]);
}