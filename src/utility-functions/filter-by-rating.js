export const filterByRatingFunction = (productList, rating) => {
	if (rating) {
		return productList.filter((item) => item.stars >= rating);
	}

	return productList;
}