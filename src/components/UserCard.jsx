import React from 'react'
import { useSelector } from 'react-redux'

export default function UserCard() {
  const user = useSelector((store)=> {store.user})
  return (
    <div className='flex '>
        <img alt='profile Pic' src=
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnBIS8n-YyUuciFuAZSFHPiCEbbbuhdjBIA&s'
        />



    </div>
  )
}
