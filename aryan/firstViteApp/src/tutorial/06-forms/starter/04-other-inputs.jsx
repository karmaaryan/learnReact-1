import { useState } from 'react';

const frameworks = ['react', 'angular', 'vue', 'svelte'];

const OtherInputs = () => {
  const [check, setCheck] = useState(false)
  const [fwName, setFW] = useState("react")

  const checkFunction=(e)=>{
    setCheck(!check)
    console.log(!check)
  }

  const fwFunction=(e)=>{
    setFW(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping </label>
          <input 
          type="checkbox" 
          name="check" 
          checked={check}
          onChange={checkFunction}
          id='check' />
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
          <select value={fwName} onChange={fwFunction} name="framework" id="framework">
            {frameworks.map((data)=>{
            return <option key={data}>{data}</option>
          })}</select>
          
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
