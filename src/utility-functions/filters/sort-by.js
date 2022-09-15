export const sortByfunction = (productList, sortBy) => {
	switch (sortBy) {
        case "POPULARITY": 
            return(
                [ ...productList ].sort(
                    (item1, item2) => item2.totalRatings - item1.totalRatings
                )
            );

		case "PRICE_HIGH_TO_LOW":
			return(
                [ ...productList ].sort(
                    (item1, item2) => item2.discountedPrice - item1.discountedPrice
                )
            );

		case "PRICE_LOW_TO_HIGH":
			return(
                [ ...productList ].sort(
                    (item1, item2) => item1.discountedPrice - item2.discountedPrice
                )
            );

		default:
			return([ ...productList ]);
	}
}