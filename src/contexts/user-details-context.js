import { createContext, useContext, useReducer } from "react";
import { initialUserDetails, userDetailsReducerFunction } from "../reducers";

const UserDetailsContext = createContext(initialUserDetails);

const UserDetailsProvider = ({ children }) => {
    const [ userDetailsState, userDetailsDispatch ] = useReducer(userDetailsReducerFunction, initialUserDetails);

    return (
        <UserDetailsContext.Provider
            value={{ userDetailsState, userDetailsDispatch }}
        >
            { children }
        </UserDetailsContext.Provider>
    );
}

const useUserDetails = () => useContext(UserDetailsContext);

export { UserDetailsProvider, useUserDetails };