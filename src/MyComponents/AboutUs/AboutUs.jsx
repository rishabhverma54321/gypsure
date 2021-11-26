import React from 'react'
import imgreport from '../images/image report.png'
import '../css/AboutUs.css'
import { Link } from 'react-router-dom'

function AboutUs () {
    return (
        <div className="responsive-rapper">
          <div className='Report'>
              <p> <Link to="/" >  Back</Link></p>
            <div className='Report-content '>
              <h1>Test Reports</h1>
              <img src={imgreport} alt="" />
              </div>
          </div>
            
        </div>
    )
}

export default AboutUs;