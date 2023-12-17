// Your code goes here
// do a default export
import React, { useState } from 'react'

const UserCard = (props) => {
    const [follow,setFollow]=useState(true)
    console.log(props)
    const {avatar,address,name,posts,followers}=props;
  return (
   <>
   <img src={avatar} alt={name} style={{borderRadius:'50%'}} />
   <h2 data-testid ='user_name'>{name}</h2>
   <p data-testid='user_address'>{address}</p>
   <h3>Posts</h3><p data-testid='user_posts'>{posts}</p>
  <h3>Followers</h3> <p data-testid='user_followers'>{followers}</p>
  <button onClick={()=>setFollow(!follow)}>{follow?'follow':'following'}</button>
   </>
  )
}

export default UserCard