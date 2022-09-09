const initialUserDetails = {
    address: {},
    orders: {},
    currentAddress: {}
}

const userDetailsReducerFunction = (state, { type, payload }) => {
    switch (type) {

        case "SET_CURRENT_ADDRESS":
            return ({
                ...state,
                currentAddress: { ...payload }
            });
        
        default:
            return { ...initialUserDetails }
    }
}

export { initialUserDetails, userDetailsReducerFunction }