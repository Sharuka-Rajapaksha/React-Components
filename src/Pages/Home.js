import React from 'react'
import Topics from '../Component/Topic/Topics'
import Content from '../Component/Content/Content'
import Props from '../Component/Props/Props'

export default function Home() {
  return (
    <div>

    <h1>React</h1>
    <h2>The library for web and native user interfaces</h2>
    <Topics/>
    <Content/>
   

    <div>
      <Props language = "React"/>
      <Props language = "JavaScript"/>
      <Props language = "CSS"/>
    </div>

    </div>
  )
}
