import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constant';

export default function feed() {
    const [feed, setFeed] = useState([]);

const fetchFeed = async()=>{
    try{
const res = await axios.get(BASE_URL+"/feed",{withCredentials:true});
setFeed(res.data);
console.log(res);
    }catch(err){
    }
}

useEffect(()=>{fetchFeed() }, []);

  return (
    <> 
    <div className='m-25' >     {feed.map((data, index)=>(
<div key={index}> {data.firstName}  </div>
   ))} 
      </div>

    </>
  )
}
