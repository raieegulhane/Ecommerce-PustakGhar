import { createContext, useContext, useReducer } from "react";
import { initialComponetValues, componentReducerFunction } from "../reducers";

const ComponentContext = createContext(initialComponetValues);

const ComponentProvider = ({ children }) => {
    const [ componentState, componentDispatch ] = useReducer(componentReducerFunction, initialComponetValues);
    
    return(
        <ComponentContext.Provider 
            value={{ componentState, componentDispatch }}
        >
            { children }
        </ComponentContext.Provider>
    );
}

const useComponent = () => useContext(ComponentContext);

export { ComponentProvider, useComponent }