import React from 'react'
import Todos from './Todos'
import { TodosAboutUS } from './TodosAboutUS'
import TodosMain from './TodosMain'
import {TodosLast} from './TodosLast'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
export const TodosList = () => {
  
    return (

        <>
           <Todos/> 
           <TodosAboutUS/>
           <TodosMain/> 
           <TodosLast/>
        </>
    )
}

export default TodosList
