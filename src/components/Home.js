import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase';
import moment from 'moment';
import InputMoment from 'input-moment';

import Button from 'material-ui/Button';

import logo from '../assets/logo.svg';
import TodoItem from './TodoItem';
import './App.css';
import '../assets/vendor/input-moment.css'

class App extends Component {
  static propTypes = {
    startDate: PropTypes.string,
    isStartPickerVisible: PropTypes.bool,
    todos: PropTypes.object,
    firebase: PropTypes.shape({ push: PropTypes.func.isRequired })
  };

  handleAdd = () => {
    const { firebase, startDate } = this.props;
    const { newTodo } = this.refs;

    if (newTodo.value === '') {
      return;
    }
    firebase.push('/todos', {
      text: newTodo.value,
      date: startDate.toISOString(),
      done: false
    })
    newTodo.value = ''
  }

  handleChange= () => {
    console.log(this.props)
  }

      
  render() {
    const { todos } = this.props;
    let { isStartPickerVisible, startDate} = this.props;
    console.log('todos:', todos);
    const toggleCalendar = () => {
      isStartPickerVisible = !isStartPickerVisible;
    };  

    const handleCalendarChange = () => {
      startDate = moment(startDate).format('llll')
    }

    const todosList = (!isLoaded(todos))
      ? 'Loading'
      : (isEmpty(todos))
        ? 'Todo list is empty'
        : Object
          .keys(todos)
          .map((key) => (<TodoItem key={key} id={key} todo={todos[key]} />));
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Work Timer</h2>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
        <div className='App-todos'>
          <h4>Todos</h4>
          {todosList}
          <h4>New Todo</h4>
          <input type='text' className='new-todo' ref='newTodo' />
          <Button raised onClick={this.handleAdd} className='todo-button'>
            Add
          </Button>
          <h3>Start:</h3>
          <div className="input">
            <input type="text" value={startDate}
              onClick={toggleCalendar} readOnly />
          </div>
          <div className={isStartPickerVisible === true ? '' : 'hidden'} >
            <InputMoment moment={moment(startDate)} onChange={this.handleChange} minStep={5} />
          </div>
        </div>
      </div>
    )
  };
};
const fbWrappedComponent = firebaseConnect([
  '/todos'
  // { type: 'once', path: '/todos' } // for loading once instead of binding
  // '/todos#populate=owner:displayNames' // for populating owner parameter from
  // id into string loaded from /displayNames root
  // '/todos#populate=collaborators:users' // for populating owner parameter from
  // id to user object loaded from /users root { path: 'todos', populates: [{
  // child: 'collaborators', root: 'users' }] } // object notation of population
  // '/todos#populate=owner:users:displayName' // for populating owner parameter
  // from id within to displayName string from user object within users root
])(App);

export default connect(({ firebase }) => ({
  todos: dataToJS(firebase, 'todos'),
  startDate:moment().format('llll'),
  isStartPickerVisible:true
}))(fbWrappedComponent);
