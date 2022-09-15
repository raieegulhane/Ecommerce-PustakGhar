export const filterByBestSellerFunction = (productList, filter) => {
    const { bestSeller } = filter;

    if (bestSeller) {
        return(
            [ ...productList ].filter(
                (item) => item.bestSeller === true
            )
        );
    }

    return([ ...productList ]);
}