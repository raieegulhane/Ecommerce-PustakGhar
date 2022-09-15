export const removeDuplicateFunction = (productList) => {
    return(
        productList.filter(
            (item,index) => productList.indexOf(item) === index
        )
    );
}