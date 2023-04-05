// import { createContext, useContext, useEffect, useReducer, useState } from "react";


// const AuthContext = createContext();

// const initialState = {user: false}

// export function reducer(state, action) {
//     switch(action.type){
//         case "login":
//             return {user: true};
//         case "logout":
//             return {user: false};
//         default:
//             throw new Error();
//     }
// }


// export const AuthContextProvider = ({children}) => {
//     const [user, dispatch] = useReducer(reducer, initialState);
//     return (
//         <AuthContext.Provider value={[user, dispatch]}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export const useAuth = () => {
//     return useContext(AuthContext);
// }