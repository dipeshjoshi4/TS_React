import React, { createContext, useContext } from "react";
export const UserContext = createContext(null);

//?Custom Hook - using useContext
//Using this line  to in Hook -> const { name, setName } = useContext(UserContext)

export const useUserDetails = () => {
    const userContext = useContext(UserContext)
    if (!userContext) {
        throw new Error("UserDetails Must Be Used Inside the UserContextProvider")
    }
    return userContext
}

//Export Function to rid from App.jsx
export const UserContextProvider = ({ children, userDetails }) => {
    return (
        <UserContext.Provider value={userDetails}>
            {children}
        </UserContext.Provider>
    )
}