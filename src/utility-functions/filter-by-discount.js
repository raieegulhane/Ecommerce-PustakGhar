export const filterByDiscountFunction = (productList, discount) => {
	if (discount) {
		return productList.filter((item) => item.discount >= discount);
	}

	return productList;
}