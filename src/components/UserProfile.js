import { useContext } from 'react'
import React from 'react'
import { UserContext } from "./App"

const UserProfile = (props) =>{
    
return(
    <>
        <h1 id='name'>{props.detail.name}</h1>
        <h1 id='age'>{props.detail.age}</h1>
    </>
)
     
}

export {UserProfile}