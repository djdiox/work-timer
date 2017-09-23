import React from 'react'
import Header from './Header';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import './App.css'; // need to import any css on JSX, gets build by SCSS file


const App = () => (
  <div className="main-container">
    <Header />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
