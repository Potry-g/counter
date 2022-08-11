import Numbers from "./components/Numbers";
import Button from "./components/Button";
import React, { useState } from 'react';

function App() {
  const[count,setCount] = useState(localStorage.getItem('counter')==null? '0' : localStorage.getItem('counter'));

  localStorage.setItem('counter', count);

  return (
    <div className="container">
      <h1 className="center">
        Counter
      </h1>
      <Numbers count={count}/>
      <Button 
        name = 'decrease'
        onClick = {() => {setCount(parseInt(count) - 1);}}/>
      <Button
        name = 'reset'
        onClick={() => {setCount('0');}}/>
      <Button
        name = 'increase'
        onClick = {() => {setCount(parseInt(count) + 1);}}/>

    </div>
  );
}

export default App;
