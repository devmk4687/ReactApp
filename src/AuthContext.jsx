import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
    isloggedIn : false,
    user : null
}

function authReducer(state, action){
    switch(action.type){
        case "LOGIN" : 
        return{
            isloggedIn : true,
            user : action.payload,
        };
        case "LOGOUT" : 
        return{
            isLoggedIn : false,
            user : null
        };
        default : 
        return state;
    }
}

export function  AuthProvider({ children}) {
    const[state, dispatch] = useReducer(authReducer, initialState);
    return (
        <AuthContext.Provider value={{ state, dispatch }}>
        {children}
        </AuthContext.Provider>
    );
}