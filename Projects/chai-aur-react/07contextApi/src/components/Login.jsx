import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

/*
  We get the context value obj, and set its value as an object comprising the username and password.
  Now, that is then accessed by the Profile component to display the username.

  And when we set it using setUser, because its a state in the wrapped App component, it triggers
  a re-render of the child components, which re-renders the Profile component with the latest
  username.
*/

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(UserContext);
  const obj = useContext(UserContext);
  console.log(obj);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password})
  }

  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
        value = {username}
        onChange = {(e) => setUsername(e.target.value)}
        placeholder='username'
      />
      {"   "}
      <input type="text" 
        value = {password}
        onChange = {(e) => setPassword(e.target.value)}
        placeholder='password'
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login