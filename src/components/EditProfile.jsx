import React from 'react'
import { useSelector } from 'react-redux'

export default function EditProfile() {
    const user = useSelector((store)=>store.user);
    console.log("first",user);
  return (
    <div>
<div className='bg-blue-100 p-7'>  

<label>First Name:</label>
<input type='text' className='h-7 w-full bg-red-100 m-2 rounded-1xl ' />

<label> Last Name:</label>
<input type='text' className='h-7 w-full bg-red-100 m-2 rounded-1xl ' />

<label> Age:</label>
<input type='text' className='h-7 w-full bg-red-100 m-2 rounded-1xl ' />

<label> Gender:</label>
<input type='text' className='h-7 w-full bg-red-100 m-2 rounded-1xl ' />

<label> Phot_url:</label>
<input type='text' className='h-7 w-full bg-red-100 m-2 rounded-1xl ' />

<label> About:</label>
<input type='text' className='h-7 w-full bg-red-100 m-2 rounded-1xl ' />

<label> Skill:</label>
<input type='text' className='h-7 w-full bg-red-100 m-2 rounded-1xl ' />

</div>


    </div>
  )
}
