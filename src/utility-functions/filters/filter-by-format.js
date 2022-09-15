export const filterByFormatFunction = (productList, format) => {

    const { paperback, hardcover } = format;

    if (
        paperback === false &&
        hardcover === false
    ) {
        return([ ...productList ]);
    }

    const filteredProductList = [];

    if (paperback) {
        const filteredData = [ ...productList ].filter(
            (item) => item.format === "Paperback"
        );
        filteredProductList.push(...filteredData);
    }

    if (hardcover) {
        const filteredData = [ ...productList ].filter(
            (item) => item.format === "Hardcover"
        );
        filteredProductList.push(...filteredData);
    }

    return([ ...filteredProductList ]);
}