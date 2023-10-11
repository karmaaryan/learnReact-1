import React from 'react';
import Final from './tutorial/06-forms/final/05-form-data'
import Starter from './tutorial/06-forms/starter/05-form-data'
function App(){
  return (
    <div className='container'  style={{marginTop:0}}>
      <Starter/>
      <div style={{height:"10px", backgroundColor:"white"}}>
      </div>
      <Final/>
    </div>
  );
}
export default App;