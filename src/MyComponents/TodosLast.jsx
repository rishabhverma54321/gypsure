import React from 'react'
import img2 from './images/g10.png'
import "./css/Todos.css";

export const TodosLast = () => {
    return (
        <>
            <div className='container-last' id='last'>
                <div className='container-last-left bg-transparent'>
                    <h1 className='bg-transparent text-light'>Query!</h1>
                    <p className="bg-transparent text-light">We Are Happy To Help</p>
                    <img  className= ' responsive-todo-last-img  bg-transparent' src={img2} alt="" />
                </div>
                <div className='container-last-right  bg-transparent'>
                <div className="bg-transparent" style={{height:'fitContent'}}>
                <form className="bg-transparent">
                <p className=" bg-transparent text-light">Just Share Your Requirement</p>
                    <div className="mb-3 bg-transparent ">
                        <label for="exampleInputName" className="form-label bg-transparent text-light">Name</label>
                        <input type="text" className="form-control bg-transparent" id="exampleInputText" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3 bg-transparent">
                        <label for="exampleInputEmail" className="form-label bg-transparent text-light">Email</label>
                        <input type="email" className="form-control bg-transparent" id="exampleInputEmail"/>
                    </div>
                    <div class="mb-3 bg-transparent">
                        <label for="exampleInputNumber" className="form-label bg-transparent text-light">Mobile Number</label>
                        <input type="number" className="form-control bg-transparent" id="exampleInputNumber"/>
                    </div>
                    <div class="mb-3 bg-transparent">
                        <label for="exampleInputText" className="form-label bg-transparent text-light">Message</label>
                        <input type="text" className="form-control bg-transparent" id="exampleInputText"/>
                    </div>
                    <button type="submit" className="btn btn-primary"> Submit <i className='last-right-arrow'/></button>
                    </form>
                    </div>
                    <div className='topLabel' style={{margin:'0px'}}></div>
                </div>
                
            </div>
        </>
    )
}
