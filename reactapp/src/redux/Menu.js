import React, { Component } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import TodoList from './TodoList'

class Menu extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/todoList">Todo List</Link>
                </li>
            </ul>

            <Routes>
                <Route path="/" element={ <Home /> } ></Route>
                <Route path="/todoList" element={ <TodoList /> } ></Route>
            </Routes>

        </BrowserRouter>
      </>
    )
  }
}

export default Menu