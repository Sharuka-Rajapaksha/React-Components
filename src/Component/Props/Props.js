import React from 'react'

export default function Props(props) {
  return (
    <div>

    <div className='topics'>
        <span className='topicText1'> The project is build with {props.language} and the skills is {props.skill} </span>
      {props.children}
    </div>

   
    
    </div>
  )
}
