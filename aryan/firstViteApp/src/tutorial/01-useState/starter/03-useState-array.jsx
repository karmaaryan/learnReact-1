import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [newData, chngData] = useState(data);

  const setNew = (id) => {
    const setData = newData.filter((input) => input.id !== id);
    chngData(setData);
  };

  // const removeAll=()=>{
  //   const setData = newData.filter((input)=> input === null);
  //   chngData(setData);
  // }

  return (
    <div>
      <h2>useState array example</h2>
      <br />
      {newData.map((input) => {
        const { name, id } = input;
        return (
          <div>
            <h4>{name}</h4>
            <button className="btn" onClick={() => setNew(id)}>
              Click me
            </button>
          </div>
        );
      })}
      <br />
      <button className="btn" onClick={() => chngData([])}>
        Remove Each & Everything
      </button>
    </div>
  );
};

export default UseStateArray;
