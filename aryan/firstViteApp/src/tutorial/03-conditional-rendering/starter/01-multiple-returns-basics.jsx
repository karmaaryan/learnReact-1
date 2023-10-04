import { useEffect, useState } from 'react';


const MultipleReturnsBasics = () => {
  
  const [loadingState, setLoadingState] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoadingState(false);
    }, 3000);
  }, [])

  if(loadingState){
    return <h1>Okay,,, we are loading content for you</h1>
  }

  return <h2>Content loaded</h2>;

};
export default MultipleReturnsBasics;
 