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
      <Props language = "React"  skill="Excellent">
          <span>This is Skill number 1: This is Children Prop</span>
      </Props>

      <Props language = "JavaScript" skill="Advanced">
          <button>This is a button</button>
      </Props>

      <Props language = "CSS" skill="Intermediate">
        <p>This is Third Children prop</p>
      </Props>
    </div>

    </div>
  )
}
