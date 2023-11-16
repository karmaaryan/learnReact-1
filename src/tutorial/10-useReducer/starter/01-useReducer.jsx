import React, { useEffect, useReducer, useState } from 'react';
import { data } from '../../../data';
import reducer from './reducer';

// using useReducer instead of useState (check reducer function in reducer.js)
const ReducerBasics = () => {

  const defaultValue = {
    people : data,
    isLoading : false
  }

  const [states, udpateStates ] = useReducer(reducer, defaultValue)

  const removeItem = (id) => {
    udpateStates({type:"removeItem", id})
  }

  const resetPeople = () => {
    udpateStates({type: "resetPeople"})
  }

  const clearPeople = () => {
    udpateStates({type: "clearPeople"})
  }

  return ( 
    <div>
      {states.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button className='btn' onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {states.people.length < 1 ? <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={resetPeople}
      >
        reset
      </button> : <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={clearPeople}
      >
        clear items
      </button>}
    </div>
  );
};

export default ReducerBasics;



{/* with useState 

  import React from 'react';
import { data } from '../../../data';
const ReducerBasics = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={() => setPeople([])}
      >
        clear items
      </button>
    </div>
  );
};

export default ReducerBasics;

*/}