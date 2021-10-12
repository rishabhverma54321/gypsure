import React from 'react'
import imggallary1 from '../images/imggallary1.svg'
import imggallary2 from '../images/imggallary2.svg'
import imggallary3 from '../images/imggallary3.svg'
import imggallary4 from '../images/imggallary4.svg'

export const Gallary = () => {
    const gallaryheading = {
        fontWeight:' 900',
        fontSize: "48px",
        marginTop:'153px',
        marginBottom:'120px'
    }
    const imggallary ={
        width: '272px',
        height:' 204px',
        marginBottom:'50px'
    }
    return (
        <div>
            <div className='gallary m-auto' style={{width:'80%'}}>
                <h1 style={gallaryheading}>GALLERY</h1>
                <div className='gallary-images d-flex justify-content-around align-items-center flex-wrap '>
                      <img src={imggallary1} style={imggallary} alt="" />
                      <img src={imggallary2} style={imggallary} alt="" />
                      <img src={imggallary3} style={imggallary} alt="" />
                      <img src={imggallary4} style={imggallary} alt="" />
                      <img src={imggallary1} style={imggallary} alt="" />
                      <img src={imggallary2} style={imggallary} alt="" />
                      <img src={imggallary3} style={imggallary} alt="" />
                      <img src={imggallary4} style={imggallary} alt="" />
                </div>
            </div>
        </div>
    )
}
