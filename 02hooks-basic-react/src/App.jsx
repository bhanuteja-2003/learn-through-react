
// here the variables created by the js are being updated but the updated values are not being reflected on the UI
// The updation on the UI is contolled buy REACT
// React provides methods that help in the updation of data on UI called hooks

import { useState } from "react";



function App() {
  let [counter, setCounter]=  useState(0) // the default value of the useState function parameter can be anything , here we are dealing with counter so i have given the initial value of counter to be 15.
  // useState returns an array , the array's first value is the counter and second value is a function that helps in updating the value of the counter and rendering it 
  // in all locations on the UI where counter is present
  // let counter = 5;

  function addValue(){
    // counter++
    if(counter==20){
      console.log("add limit reached");
    }
    else{
    counter = counter + 1
    setCounter(counter)
    }
    // setCounter(counter+1) - this can also be used to update the value of counter
    console.log(counter);
  }
  function decreaseValue(){
    // counter++
    if(counter==0){
      console.log("remove limit reached");
    }
    else{
      counter = counter - 1
    setCounter(counter)
    }
    // setCounter(counter-1) - this can also be used to update the value of counter
    console.log(counter);
  }
  
  return (
    <>
    <h1>Hello there!! {counter}</h1>
    <h2>counter value : {counter}</h2>
    <button
    onClick={ ()=>{
      addValue();
    } }
    >Add value</button>
    <br />
    <button
    onClick={()=>{
      decreaseValue()
    }}
    >Decrease value</button>
    </>
  )
}

export default App
