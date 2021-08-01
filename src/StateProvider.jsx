import React, {createContext, useContext, useReducer} from 'react';
// prepare the datalayer
export const StateContext = createContext();

// Wrap out app provide data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
//pool info from the data layer
export const useStateValue = () => useContext(StateContext) 