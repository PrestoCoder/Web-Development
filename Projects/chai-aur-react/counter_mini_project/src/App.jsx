import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Note:- We can't write addEventListener to upButton element.
// This is because, JS will try to search it before rendering occurs.
// And thus will fail to do so, giving an error.

// Invalid hook call. Hooks can only be called inside of the body of a function component. 
// Which is also why the functions using/manipulating variable created from hook should be declared inside the function component.
// This is to be able to access the hook as outside the scope of App component, hook won't be accessible.
// const [counter, setCounter] = useState(0)

function App() {
  // setCounter function when called will not only update counter, but also tell React to re-render all
  // instances where counter is being used.
  // Updating counter without setCounter function does update the counter, but doesn't do the re-rendering stuff.
  // Argument inside useState is the default value that we want for our counter variable.
  const [counter, setCounter] = useState(0)
  const [mssg, setMssg] = useState("Chai aur code")

  function increaseCounter() {
    // To avoid rerendering everytime counter is increased.
    // And instead rerender only once, when its actually needed.
    if(counter == 0) {
      setMssg("Chai aur code")
    }
    setCounter(counter + 1)
    // Note:- If we write setCounter multiple times, due to the fiber algorithm,
    // Updations happen in batches, so, it will combine all setCounter calls into one.(behavior)
    // To avoid that, we can pass a call back function, which takes as argument the current value of counter.
    // Now, the counter would be updated using the counter function.
    // And fibre works in a way, that it'll update using subsequent setCounter only after the previous one is finished executing.
    // And what it returns is the new value of counter.
    // The need for such a callback function is intuitive, as we might want to do some complex operation on the state, 
    // And not just counter + 1.

    /* 
    Instead of this:-
    setCounter(counter + 1)
    setCounter(counter + 1)

    Use:-
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    */
  }

  function decreaseCounter() {
    if(counter == 0) {
      setMssg("Sorry, can't go below 0")
      return;
    }
    setCounter(counter - 1)
  }

  return ( 
    <>
      <h1>{mssg}</h1>
      <h2>Counter value: {counter}</h2>
      
      {/* 
      Note:- In normal HTML, onClick accepts function call like:- "abc()",
      But in react, it doesn't work the same.
      We use evaluated expressions for this purpose.
      And those too don't translate to normal HTML.
      */}
      <button onClick = {increaseCounter}>Increase Counter</button>
      <button onClick = {decreaseCounter}>Decrease Counter</button>
    </>
  )
}

export default App
