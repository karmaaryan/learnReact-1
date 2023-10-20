import { useState } from "react";

const UseStateGotcha = () => {
  
  const [num0, updateValue] = useState(0);
  
  const update=()=>{
    setTimeout(()=>{
      updateValue((input)=>{
        return input+1;
      })
    },1000)
  }

  return <div>
    <h2>useState "gotcha"</h2>
    <h1>{num0}</h1>
    <button className="btn" onClick={update}>Click to Update</button>
   </div>

};

export default UseStateGotcha;
