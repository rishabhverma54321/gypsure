import React from 'react'
import './css/Todos.css'
import img from './images/image24.png'
// import {useWindowScroll} from "react-use"
import { withRouter } from 'react-router'


const Todos = ({history}) => {
    // const { y: pageYOffset} = useWindowScroll();
    console.log(history);
    const scrollDown = () =>{
        document.getElementById('last').scrollIntoView();
        // if(pageYOffset <400){
           document.getElementById('down-scroll').style.display = 'none'
        // }
        // else{
        //     document.getElementById('down-scroll').style.display = 'block'
        // }
    }
    return (
        <>
           <div className='container-start'> 
           <div className="container-text">
           <h1 className='container-start-title'>GYP<span style={{color:"#F24005", backgroundColor:"transparent"}}>SURE</span> PLUS</h1>
           <h3 className='container-start-subtitle'>Design And <br /> Construction</h3>
           </div>
               <img src={img} className='container-start-img' alt="" />
          </div> 
          <div id='down-scroll' className='navdown-button down-scroll-down' onClick= {scrollDown}> <i className='down-arrow'></i></div>
        </>
    )
}

export default withRouter(Todos);