const initialAuthData = {
    isAuth: false,
    authToken: "",
    userData: {},
}


const authReducerFunction = (state, { type, payload }) => {
    switch(type) {

        default:
            return new Error("Error occured in authentication.")
    }
}

export { initialAuthData, authReducerFunction };
