import { useState } from 'react';

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');

  const codeExample = text || 'hello world';

  // can't use if statements
  return (
    <div>
      {/* {if(someCondition){"won't work"}} */}

      <h4>Falsy OR : {text || 'hello world'}</h4>
      <h4>Falsy AND :{text && 'hello world'}</h4>
      <h4>Truthy OR :{name || 'hello world'}</h4>
      <h4>Truthy AND : {name && 'hello world'}</h4>
      {codeExample}
    </div>
  );
};

// hello world
// ''
// susan 
// hello world

const exportThisToUnderstand =()=>{
  return <div> 
    {/* and operator */}
    <h1>{"trueI" && ""}</h1>          {/* prints second value cause first one is truthy  */}
    <h1>{"" && "trueII"}</h1>         {/* prints first value cause first one is flasy    */}
    <h1>{"trueI" && "trueII"}</h1>    {/* prints second value cause first one is truthy  */}
    <h1>{"" && ""}</h1>               {/* prints first value cause first one is flasy    */}
    {/* conclusion : AND oprator depends on the first value, ex- first -> true | output = second value, first -> false | output = first value;          first = falsy, returns first else second */}
    {/* AND = firrst -> true =  output first */}

    {/* or operator */}
    <h1>{"true1" || ""}</h1>           {/* prints first value cause first one is truthy  */}
    <h1>{"" || "true2"}</h1>           {/* prints second value cause first one is flasy  */}
    <h1>{"true1" || "true2"}</h1>      {/* prints first value cause first one is truthy */}
    <h1>{"" || ""}</h1>                {/* prints second value cause first one is flasy */}
    {/* conclusion : OR oprator also depends on the first value, ex- first -> true | output = first value, first -> false | output = second value;        first = truthy, returns first else second */}
    {/* OR = firrst -> false =  output first */}
  
  </div>
}

export default ShortCircuitOverview;
