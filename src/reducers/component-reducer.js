const initialComponetValues = {
    productDetails: {
        showProductDetails: false,
        productId: "none"
    },
}


const componentReducerFunction = (state, { type, payload }) => {
    const { productDetailsModal } = state;

    switch (type) {
        case "PRODUCT_DETAILS":
            return { 
                ...state, 
                productDetails: {
                    ...productDetails,
                    showProductDetails: !productDetailsModal.showProductDetails,
                    productId: payload
                }
            }

        default: 
            return(initialComponetValues);
    }
}

export { initialComponetValues, componentReducerFunction };