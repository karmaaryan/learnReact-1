import { useState } from 'react';

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState({
    name:'',
    email:'',
    password:''
  })

  // using useState
  const handleSubmit = (e) => {
    e.preventDefault();

    setValue(value+1)
    
    console.log(data)
  };

  const update=(e)=>{
    setData({...data, [e.target.name] : e.target.value})
  }

  // using formData API

  const handleSubmit2=(e)=>{
    e.preventDefault();
    const const1 = new FormData(e.currentTarget)
    const data1 = Object.fromEntries(const1)
    console.log(data1)
    setValue(value+1)
    e.currentTarget.reset();
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit2}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input value={data.name} onChange={(e)=>update(e)} type='text' className='form-input' id='name' name='name' />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input value={data.email} onChange={(e)=>update(e)} type='email' className='form-input' id='email' name='email' />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            value={data.password}
            onChange={(e)=>update(e)}
            type='password'
            className='form-input'
            id='password'
            name='password'
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default UncontrolledInputs;
