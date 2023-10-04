import { useState, useEffect } from 'react';
const url = 'https://api.github.com/users';

const FetchData = ()=>{

  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchApiData = async () =>{
      try{ 
        const fetching = await fetch(url)     
        const finalData = await fetching.json();
        // console.log(finalData)
        setData(finalData);
      }catch(error){
        console.log(error)
      }
    }
    fetchApiData();
  },[])

  return <section>
    <h2>Github users list</h2>
    <ul className='users'>
    {data.map((input)=>{
      const {login, html_url, avatar_url, id} = input;
      return (<li>
        <img src={avatar_url} alt="" />
        <div>
          <h5>{login}</h5>
          <a href={html_url}>Profile</a>
        </div>
      </li>)
      })}
    </ul>
  </section>
}

export default FetchData;