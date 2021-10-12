import React from "react";
import "./css/Todos.css";
import { Link } from "react-router-dom";
export const TodosMain = () => {
     const cardshift1 = () =>{
           document.getElementsByClassName('cardStrach')[0].style.display='block'
     } 
         const cardshift2 = () =>{
        document.getElementsByClassName('cardStrach')[1].style.display='block'
  }    
   const cardshift3 = () =>{
    document.getElementsByClassName('cardStrach')[2].style.display='block'

}
     const cardend1 = () =>{
        document.getElementsByClassName('cardStrach')[0].style.display='none'
  }
  const cardend2 = () =>{
    document.getElementsByClassName('cardStrach')[1].style.display='none'
}
const cardend3 = () =>{
    document.getElementsByClassName('cardStrach')[2].style.display='none'

}
     
    return (
        <>
            <div className="container-middle">
                <div className="container-middle-title">
                    How we <br /> Work
                </div>
                <div className="container-middle-card" >
                    <div class="card" style={{ width: '333px', height: '330px', border: 'none' }}>
                        <h1 style={{ textAlign: 'center', fontWeight: '800', fontSize: "55px" }}>01</h1>
                        <div class="card-body d-flex justify-content-around flex-column bg-white" onMouseOver={cardshift1} onMouseOut={cardend1}>
                            <p class="card-text fw-bold bg-white fs-5">
                                Tell Us Your Requirement through Contact Us Form
                            </p>
                            <div className="cardStrach" style={{backgroundColor:'transparent', display:'none'}}>
                            <div className=' container-middle-link bg-white'>
                            <Link  to='/' class="card-link bg-white text-decoration-none" style={{color:"#F25A27"}}> 
                                Contact Us <i className='right-arrow'/>
                            </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="card" style={{ width: '333px', height: '330px', border: 'none' }}>
                        <h1 style={{ textAlign: 'center', fontWeight: '800', fontSize: "55px" }}>02</h1>
                        <div class="card-body d-flex justify-content-around flex-column bg-white" onMouseOver={cardshift2} onMouseOut={cardend2}>
                            <p class="card-text bg-white fw-bold fs-5">
                            We Will Contact You with Quotation For The Inquired Product
                            </p>
                            <div className="cardStrach" style={{backgroundColor:'transparent', display:'none'}}>
                            <div className=' container-middle-link bg-white'>
                            <Link to='/' class="card-link bg-white text-decoration-none" style={{color:"#F25A27"}}> 
                                Contact Us <i className='right-arrow'/>
                            </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="card" style={{ width: '333px', height: '330px', border: 'none' }}>
                        <h1 style={{ textAlign: 'center', fontWeight: '800', fontSize: "55px" }}>03</h1>
                        <div class="card-body d-flex justify-content-around flex-column bg-white " onMouseOver={cardshift3} onMouseOut={cardend3}>
                            <p class="card-text bg-white fw-bold fs-5">
                                Once Everything Is Finalised We Deliver Your Material
                                To You
                            </p>
                             <div className="cardStrach" style={{backgroundColor:'transparent', display:'none'}}>
                            <div className=' container-middle-link bg-white'>
                            <Link to='/' class="card-link bg-white text-decoration-none" style={{color:"#F25A27"}}> 
                                Contact Us <i className='right-arrow'/>
                            </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
