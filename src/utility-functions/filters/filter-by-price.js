export const filterByPriceFunction = (productList, price) => {
    if (price <= 1500) {
        return [...productList].filter((item) => item.discountedPrice <= price);
    }

    return productList;
}