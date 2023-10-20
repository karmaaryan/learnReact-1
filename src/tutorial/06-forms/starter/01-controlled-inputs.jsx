import {useState} from 'react'

const ControlledInputs = () => {
  const [nameValue, updateName] = useState("")
  const [mailValue, updateMail] = useState("")

  const printValue=(e)=>{
    e.preventDefault()
    console.log(nameValue)
    console.log(mailValue)
  }

  return (<form className='form' >
      <h4>controlled inputs</h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          className='form-input1 form-input'
          id='name'
          // value={nameValue}
          onChange={(e)=>updateName(e.target.value)}
        />
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input
          type='email'
          className='form-input2 form-input'
          id='email'
          // value={mailValue}
          onChange={(e)=>updateMail(e.target.value)}
         />
      </div>
      <button type='submit' className='btn btn-block' onClick={printValue}>
        submit
      </button>
    </form>
  );
};
export default ControlledInputs;
