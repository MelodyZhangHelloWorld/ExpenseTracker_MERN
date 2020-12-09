import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


//Initial state

const initialState = {
    transactions: [ ]
}

//Create context
export const GlobalContext = createContext(initialState);


/* in order for other components to have access to 
this stored global state, there should be a provider
wrapping all children components*/
// Provider component
export const GlobalProvider = ({ children }) => {
    const [state,  dispatch] = useReducer(AppReducer, initialState); //**

    //Actions  -- be wrapped in the Provider
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider 
     value={{ transactions: state.transactions,
        deleteTransaction,addTransaction
     }} >    
        {children} </GlobalContext.Provider> )
}