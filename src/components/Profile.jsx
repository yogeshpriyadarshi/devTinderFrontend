import React from 'react'
import UserCard from './UserCard'
import EditProfile from './EditProfile'

export default function Profile() {

  return (
    <div className='flex justify-between  mt-20 mb-5'>
      <div className='flex-1'> 
<UserCard/>
      </div>
      <div className='flex-1' >   
<EditProfile/>
      </div>
    </div>
  )
}
