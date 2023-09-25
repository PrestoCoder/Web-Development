import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  // A real life scenario could be that we have a list of cards, with each for a different user.
  // Hence, we'll have to show data for each person.
  // What we can do is, pass data here using props.
  // Its  similar to passing data to function. As, <Card /> is equivalent to Card().
  // And we declare a parameter where the function component is defined, through which we can access passed arguments.
  // However, <Card a = "1" b = "2"/> is === Card(a = "1", b = "2")

  let arr = [1, 2, 3]
  let obj = {
    a : "b",
    b : "c"
  }
  return (
    <div className = "flex">
      <h1 className='bg-green-400 rounded-lg m-5 p-4'>Tailwind tutorial</h1>
      {/* 
        Note:- We can't directly pass arrays or objects.
        But can instead declare them outside the HTML, and include them as evaluated expression.
      
      */}
      <Card name = "yoyo" age = "24" arr = {arr} obj = {obj}  />
    </div>
  )
}

export default App