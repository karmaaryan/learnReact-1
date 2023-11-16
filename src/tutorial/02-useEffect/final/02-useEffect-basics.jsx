import { useState, useEffect } from 'react';


const Counter = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  console.log("this compoenent is rendering")

  useEffect(() => {
  }, [value]);

  return (
    <div>
      <h1>{value}</h1>
      <button className='btn' onClick={increment}>Increment</button>
    </div>
  );
};

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  
  const sayHello = () => {
    console.log('hello there');
  };

  sayHello();
  
  useEffect(() => {
    console.log('hello from useEffect');
  }, []);

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
      <Counter />
    </div>
  );
};
export default UseEffectBasics;