import React, { useState } from "react";
import UserContext from "./UserContext";

/*
    This UserContextProvider will be used as a wrapper over components.
    <UserContextProvider>
        <Child component />
    </UserContextProvider>

    The child component will be passed on as children parameter, and what will be returned will be
    a wrapped version of the component, wrapped in UserContext.Provider.

    Thus, UserContextProvider is kind of a wrapper function, such that it wraps the component and returns it.
*/

const UserContextProvider = ({children}) => {
    // Let this data be something we'd fetch using fetchAPI.
    // Then we'll set the data using setData.
    // And we'll pass the data to children components using value parameter.
    const [user, setUser] = useState();

    return (
        <UserContext.Provider value = {{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
 
 export default UserContextProvider