import { useContext, useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContext from './context/UserContext'

function App() {
  
  // Didn't wrap entire App component with UserContextProvider, as in large projects, there could be 
  // multiple contexts. 
  return (
    <>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )

  /* Alternatively - to explain that UserContextProvider is doing nothing but wrapping the component.
    And availing the user and setUser to all children components with the help of useContext 

    const [user, setUser] = useState();

    return (
      <>
        <UserContext.Provider value = {{user, setUser}}>
          <Login />
          <Profile />
        </UserContext.Provider>
      </>
    )
  */
}

export default App
