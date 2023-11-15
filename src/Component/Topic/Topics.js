import React from 'react'
import './topics.css'

export default function Topics() {

  //Create Dynamic Components
  const dCompo1= "Create user interfaces from components"
  //const dCompo2 = "Create Dynamic Components2"

  const a = 10
  const b = 20
  const c = a + b

  //Create an Alert with Dynamic Components
  //<div className='topics2'>
  //<span className='topicText2'>{alert("hello")} </span>
  //</div>

  return (
    <div>

      <h1 className='react'>React

        <p>The library for web and native user interfaces</p>
        <button className='button1'>Learn React</button>
        <button className='button2'>API Reference</button>
     
      </h1>
 
      <div className='topics'>
        <span className='topicText1'>{dCompo1}</span>
        <p className='p1'>React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.</p>
      </div>

      <div className='topics2'>
        <span className='topicText2'>The value of the Dynamic Component C is:{c} </span>
      </div>

      <div className='topics3'>
        <span className='topicText3'> This is array: {[10,20,30,40]} </span>
      </div>

    </div>
  )
}
