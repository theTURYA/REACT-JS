import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

  
  //let counter = 5
  const addValue = () =>{
    //counter = counter + 1
    setCounter(counter + 1)
    //setCounter((prevCounter) => prevCounter + 1)
    
    //setCounter(prevCounter => prevCounter + 1)
    //setCounter(prevCounter => prevCounter + 1 )
    //setCounter(prevCounter => prevCounter + 1)
    //setCounter(prevCounter => prevCounter + 1)
  
  }
  const removeValue = () =>{
    setCounter(counter - 1)
   
    if(counter < 0){
      setCounter = 0
    }
    
  }
  

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}> Add Value : {counter}</button>
      <br />
      <button onClick={removeValue}>Decrease Value : {counter}</button>
    </>
  )
}

export default App
