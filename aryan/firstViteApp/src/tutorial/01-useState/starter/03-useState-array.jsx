import {data} from '../../../data.js'
import React from 'react';


const UseStateArray = () => {
  const [dataInput, setPeople] = React.useState(data);
    function removePpl(id){
      const remainingppl = dataInput.filter((input)=> input.id != id);
      setPeople(remainingppl);
    }
  return <div>
    <h2>useState array example</h2>
    {dataInput.map((data)=>{
      const {id, name} = data;
      return <div key={id} JclassName='item'>
        <h4>{name}</h4>
        <button className='btn' onClick={()=>removePpl(id)}>Click to remove</button>
      </div>
    })}
  </div>

};

export default UseStateArray;
 