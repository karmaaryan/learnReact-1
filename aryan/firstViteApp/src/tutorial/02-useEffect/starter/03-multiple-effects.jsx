import { useState, useEffect } from 'react';

const MultipleEffects = () => {

  const [value1, setFirstValue] = useState(0);
  const [value2, setSecondValue] = useState(0);

  useEffect(()=>{
    console.log("hello from useEffect1")
  },[value1])

  useEffect(()=>{
    console.log("hello from useEffect2");
  }, [value2]);

  return (
    <div>
      <h1>value : {value1}</h1>
      <button className='btn' onClick={() => setFirstValue(value1 + 1)}>
        value
      </button>
      <h1>second value : {value2}</h1>
      <button className='btn' onClick={() => setSecondValue(value2 + 1)}>
        second value
      </button>
    </div>
  );
};
export default MultipleEffects;
