import { useEffect, useState } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log('hello there');
  };

  sayHello();

  useEffect(()=>{
    console.log("Calling from useEffect");
    // it will only work once cause we are using dependency array
  },[])

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
