import { useState } from "react";

const UseStateBasics = () => {

  let numberStart = 0;

  const [numberValue, increaseCount]=useState(numberStart);
  const [numberValue2, increaseCount2]=useState(numberStart);

  const func=()=>{
    increaseCount(numberValue+1);
  }
  const func2=()=>{
    increaseCount2(numberValue2+1);
  }
  
  return <>
    <h2>useState basics</h2>;
    <h4>Count 1 is : {numberValue}</h4>
    <button className="btn" onClick={func}>Count++</button> 
    <h4>Count 2 is : {numberValue2}</h4>
    <button className="btn" onClick={func2}>Count++</button>
  </> 
};

export default UseStateBasics;