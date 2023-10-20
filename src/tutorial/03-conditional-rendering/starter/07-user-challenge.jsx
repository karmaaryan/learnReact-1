import {useState} from 'react'

const UserChallenge = () => {

  const [state, updateState] = useState(false)

  const FirstComponent=()=>{
    return (<div>
      <h1>Hello There, Vegan Food Truck</h1>
      <button className='btn' onClick={()=>updateState(!state)}>log out</button>
  </div>)
  }

  const SecondComponent=()=>{
    return (<div>
      <h1>Please Login</h1>
      <h1>hmm, look at this handsome guy teaching</h1>
      <button className='btn' onClick={()=>updateState(!state)}>Login</button>
    </div>)
  }

  return (state ? <FirstComponent/> : <SecondComponent/>)
};

export default UserChallenge;