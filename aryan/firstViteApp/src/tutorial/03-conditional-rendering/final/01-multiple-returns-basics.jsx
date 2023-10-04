import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [loadingState, updateState] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      updateState(false);
    }, 3000);
  }, [])

  if(loadingState == true){
    return <h1> loading... </h1> 
  }

  return <h1> content loaded </h1>
};
export default MultipleReturnsBasics;
