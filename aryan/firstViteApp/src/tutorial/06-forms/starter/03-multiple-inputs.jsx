import { useState } from 'react'

const MultipleInputs = () => {

  const [value, setValue] = useState({
    name: "",
    email: "",
    password: ""
  })

  const mainFunction = (e) => {
    setValue({...value, [e.target.name] : e.target.value})
  }

  return (
    <div>
      <form className='form'>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input 
          value={value.name} 
          type='text' 
          className='form-input' 
          id='name' 
          name='name' 
          onChange={mainFunction} 
          />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input 
          value={value.email} 
          type='email' 
          className='form-input' 
          id='email' 
          name='email' 
          onChange={mainFunction}  />
        </div>
        {/* password */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input 
          value={value.password} 
          name='password' 
          type='password' 
          className='form-input' 
          id='password' 
          onChange={mainFunction} 
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
