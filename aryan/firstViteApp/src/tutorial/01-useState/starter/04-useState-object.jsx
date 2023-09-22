import { useState } from 'react';

const UseStateObject = () => {
  const [me, chngPerson] = useState({
    name: 'Aryan',
    age: 19,
    hobby: 'Reading books', 
  })

  const showFriend=()=>{
    chngPerson({
      name: 'Prashant',
      age: 21,
      hobby: 'Working with tech', 
    })
  }

  return <div>
    <h2>useState object example</h2>
    <h3>Name : {me.name}</h3>
    <h3>Age : {me.age}</h3>
    <h4>Hobby of {me.name} is {me.hobby}</h4>
    <button className='btn' onClick={showFriend}> Show my friend </button>
  </div>



};

export default UseStateObject;
