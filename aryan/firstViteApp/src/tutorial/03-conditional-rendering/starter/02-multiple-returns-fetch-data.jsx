import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/aryankarma';



const MultipleReturnsFetchData = () => {

  const [loadState, setLoadState] = useState(true)
  const [errorChk, setError] = useState(false)
  const [apiData, setApiData] = useState(null)

  useEffect(()=>{
    const fetchingApi = async () => {
      try {
        const rawData = await fetch(url)
        if(!rawData.ok){  // their's an error in fetching the api
          setError(true)
          setLoadState(false);
          return;   // ending the processing right away, letting the compiler to return out of this function and not convert the data into json (unnessesary processing) 
        }
        const finalData = await rawData.json()
        setApiData(finalData);  
      }catch (error) {
        setError(true);
      }

      setLoadState(false);

    }
    fetchingApi();
  },[])
 
  if(loadState){
    return <h2>We are loading content for you</h2>
  }
  if(errorChk){
    return <h4>Their's an error, you can check console for more information</h4>
  }

  const {avatar_url, name, company, bio, following, followers} = apiData;
  return <div>
    <h2 style={{marginBottom:'55px'}}>{name}'s github profile</h2>
    <img
        style={{ width: '150px', borderRadius: '35px' }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      {/* <h4>works at {company}</h4> */}
      <h5>Following : {following} Followers : {followers}</h5>
      <p>{bio}</p>
  </div>
};
export default MultipleReturnsFetchData;
 