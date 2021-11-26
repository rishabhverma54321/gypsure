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
        <Router>
        <>
           <Todos/> 
           <TodosAboutUS/>
           <TodosMain/> 
           <Switch>
           <TodosLast/>
           <Route path="/last">
            <TodosLast/>
          </Route>
           </Switch>
        </>
      </Router>
    )
}

export default TodosList
