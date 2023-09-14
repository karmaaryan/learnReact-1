import { useState } from "react";

const UseStateBasics = () => {

  let numberInitial = 0;
  const [number, func2] = useState(numberInitial);
  const func=()=>{
    func2(number+1)
  }

  let numberEnd=0;
  const [value1, func4] = useState(numberEnd);
  const func3=()=>{
    func4(value1+1);
  }

  return <>
    <h2>useState basics</h2>
    <h4>Count is : {number}</h4>
    <button onClick={func} className="btn">Count ++</button>
    <hr />
    <h4>Count is : {value1}</h4>
    <button onClick={func3} className="btn">Count ++</button>
  </> 
};

export default UseStateBasics;