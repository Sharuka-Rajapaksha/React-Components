import React from 'react'
import {Link} from 'react-router-dom'

export default function Home2() {
  return (
    <div>

        <div>This is HomePage</div>
        <Link to="/About">About Page</Link>
    
    
        <Link to="/ContactUs"> Contact Us</Link>

    </div>
  )
}
