const initialComponetValues = {
    currentProductDetails: false
}


const componentReducerFunction = (state, { type, payload }) => {
    const { currentProductDetails } = state;

    switch (type) {
        case "PRODUCT_DETAILS":
            return { 
                ...state, 
                currentProductDetails: true
            }

        default: 
            return(initialComponetValues);
    }
}

export { initialComponetValues, componentReducerFunction };