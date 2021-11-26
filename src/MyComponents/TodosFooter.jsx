import React from 'react'
import './css/Todos.css'
import imgmail from './images/Group 4.png';
import imgwhatsapp from './images/Group 3.png'
import imginsta from './images/Group 5.png'
export const TodosFooter = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-card1'>
                    <h3 className='responsive-footer-title bg-transparent text-light'>Head Office</h3>
                    <i class="fa fa-map-marker bg-transparent" aria-hidden="true"></i>
                    <p className=' responsive-footer-subtitle fit-content bg-transparent text-light'>S.No.46/1/2, Opp Apex College,Pisoli-Mohammadwadi Road, Pune - 411060
                    </p>
                    <i class="fas fa-phone-alt bg-transparent" ></i>
                    <p className=' responsive-footer-subtitle bg-transparent fs-5 text-light'>+91-9028750831/ <br /> +91-9766510766</p>
                </div>
                <div className='footer-card2'>
                <h3 className=' responsive-footer-title bg-transparent text-light'>Branch 1</h3>
                <i class="fa fa-map-marker bg-transparent" aria-hidden="true"></i>
                    <p className=' responsive-footer-subtitle fit-content bg-transparent text-light'> XI/299E, Kottappady Road, Ayiroorpadam, Kothamangalam, Ernakulam - 686691</p>
                    <i class="fas fa-phone-alt bg-transparent" ></i>
                    <p className=' responsive-footer-subtitle bg-transparent text-light'>+91-9567339213</p>
                </div>
                <div className='footer-card3'>
                <h3 className=' responsive-footer-title bg-transparent text-light'>Branch 2</h3>
                <i class="fa fa-map-marker bg-transparent" aria-hidden="true"></i>
                    <p className=' responsive-footer-subtitle fit-content bg-transparent text-light'>18/2RT, 1st Floor, Ram Villa, Prakash Nagar, Begumpet, Hyderbad-500016</p>
                    {/* <i class="fas fa-phone-alt bg-transparent"></i> */}
                    <p className=' responsive-footer-subtitle bg-transparent text-light' style={{fontSize: '22px',lineHeight: '38px',marginTop:'40px'}}>contact@gypsure.com</p>
                </div>
                <div className='footer-social-card bg-transparent'>
                  <div className='bg-transparent' ><img className=' responsive-footer-icon bg-transparent' src={imgmail} alt="" /></div>
                  <div className=' bg-transparent'><img className=' responsive-footer-icon bg-transparent'src={imgwhatsapp} alt="" /></div>
                  <div className=' bg-transparent'><img className=' responsive-footer-icon bg-transparent'src={imginsta} alt="" /></div>
                </div>
            </div>
        </>
    )
}
