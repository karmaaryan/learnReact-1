import {useState} from 'react'

const UserChallenge = () => {

  const [state, updateState] = useState(false)


 return (state ? (<div>
      <h1>Hello There, Vegan Food Truck</h1>
      <button className='btn' onClick={()=>updateState(!state)}>log out</button>
  </div>): (<div>
      <h1>Please Login</h1>
      <button className='btn' onClick={()=>updateState(!state)}>Login</button>
    </div>))


};

export default UserChallenge;

// Hello There, Vegan Food Truck
// btn logout