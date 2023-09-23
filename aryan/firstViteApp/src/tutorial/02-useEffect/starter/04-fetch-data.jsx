import {useState, useEffect} from 'react';
const url = 'https://api.github.com/users';

// const [data, setData] = useState();

const fetchDataApi = async ()=>{
  try {
    const rawData = await fetch(url)
    const finalData = await rawData.json();
    // console.log(finalData)
    return finalData;
    // return setData(finalData);
  } catch (error) {
    console.log(error)
  }
}

const obj = {
  name : "aryan",
  obj2 : {
    name:"karma"
  }
} 

// console.log(obj.name);

console.log(fetchDataApi())

const FetchData = () => {
  return <div>
    <h2>fetch data example</h2>
    <section>
      <h3>Github Users</h3>
      <ul className='users'>
        
        <li>
          <img url='' src="" alt="" />
          <div>
            <h5></h5>
            <a></a>
          </div>
        </li>

      </ul>
    </section>
  </div>
};
export default FetchData;
 