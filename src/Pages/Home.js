import React from 'react'
import Topics from '../Component/Topic/Topics'
import Content from '../Component/Content/Content'
import Props from '../Component/Props/Props'

export default function Home() {
  return (
    <div>

    
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
