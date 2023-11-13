import React from 'react'
import './topics.css'

export default function Topics() {

  //Create Dynamic Components
  const dCompo1= "Create Dynnamic Components1"
  const dCompo2 = 'Create Dynamic Components2'

  const a = 10
  const b = 20
  const c = a + b

  return (
    <div>
         <div className='topics'>
            <span className='topicText1'>This is the Topic & {dCompo1}{dCompo2}</span>
         </div>

        <div className='topics2'>
        <span className='topicText2'>The value of the Dynamic Component C is:{c} AND{alert("hello")} This is array: {[10,20,30,40]} </span>
        </div>

    </div>
  )
}
