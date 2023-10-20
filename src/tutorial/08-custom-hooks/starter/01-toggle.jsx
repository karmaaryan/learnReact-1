import { useState } from 'react';
import useToggling from './useToggle';


const ToggleExample = () => {

  const {value, updateFunction} = useToggling(true);

  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className='btn' onClick={updateFunction}>
        toggle
      </button>
      {value && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
