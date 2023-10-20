const ErrorExample = () => {
  
  let count = 0;
  
  const increaseCount =()=>{
    count++;
    console.log(count);
  }

  return <>
    <h2>useState error example</h2>
    <h4>Count is : {count}</h4>
    <button onClick={increaseCount}>Count++</button>
  </>;
};

export default ErrorExample;
