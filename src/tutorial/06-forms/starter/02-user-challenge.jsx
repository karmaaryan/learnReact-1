import {data} from '../../../data'
import {useState} from 'react'

const UserChallenge=()=>{

  const [nameValue, setName] = useState("")

  const addUser=(e)=>{
    e.preventDefault();
    addToList(nameValue)
  }
  
  const addToList=(name)=>{
    const id = list.length+1
    const userID = {id, name}
    console.log(list)
    console.log(userID)
    console.log([...list, userID])
    updateList([...list, userID])
  }

  const [list, updateList] = useState(data)

  const removeName=(id)=>{
    let setList = list.filter((input)=> input.id != id)
    updateList(setList)
  }
  
  return (
    <div>
      <form className='form' onSubmit={(e)=>addUser(e)} style={{marginTop: 10}}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' onChange={(e)=>setName(e.target.value)} className='form-input' id='name' />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {/* adding list users */}
      <div style={{margin:50}}>
    <h3>Users</h3>
    {list.map((input)=>{
      return <div key={input.id}>
        <h5 className='geth5'>{input.name}</h5>
        <button onClick={()=>removeName(input.id)} className='btn'>remove</button>
      </div>
    })}
  </div>
    </div>
  );
};
export default UserChallenge;
