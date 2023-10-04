import {useState, useEffect} from 'react'

const ToggleChallenge = () => {

  const [toggleState, updateState] = useState(false);

  function update(input){
    updateState(input);
  }

  const Toggle=()=>{
    return <h1>This is a toggle</h1>
  }
  
  return <div>
    <button className="btn" onClick={()=> update(!toggleState)}>Click to toggleState</button>    
    {toggleState && <Toggle/>}
  </div> 

  

};

export default ToggleChallenge;