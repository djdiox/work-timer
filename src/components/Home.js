import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {firebaseConnect, isLoaded, isEmpty, dataToJS} from 'react-redux-firebase';
import moment from 'moment';
import InputMoment from 'input-moment';

import Button from 'material-ui/Button';

import logo from '../assets/logo.svg';
import TodoItem from './TodoItem';
import './App.css';
import '../assets/vendor/input-moment.css'

class App extends Component {
  static propTypes = {
    todos: PropTypes.object,
    firebase: PropTypes.shape({push: PropTypes.func.isRequired})
  };

  state = {
    m: moment().add('1', 'month'),
    isStartPickerVisible:true
  };

  handleChange = m => {
    this.setState({m});
  };

  handleAdd = () => {
    const {firebase} = this.props;
    const {newTodo} = this.refs;

    if(newTodo.value === ''){
      return;
    }
    firebase.push('/todos', {
      text: newTodo.value,
      date: this.state.m.toISOString(),
      done: false
    })
    newTodo.value = ''
  }

  toggleCalendar = () => {
    const state = this.state;
    this.setState({...state, isStartPickerVisible:!state.isStartPickerVisible});
    console.log(this.state);
  };

  render() {
    const {todos, date} = this.props;
    // date = moment();

    console.log('todos:', todos);

    const todosList = (!isLoaded(todos))
      ? 'Loading'
      : (isEmpty(todos))
        ? 'Todo list is empty'
        : Object
          .keys(todos)
          .map((key) => (<TodoItem key={key} id={key} todo={todos[key]}/>));
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Work Timer</h2>
          <img src={logo} className='App-logo' alt='logo'/>
        </div>
        <div className='App-todos'>
          <h4>Todos</h4>
          {todosList}
          <h4>New Todo</h4>
          <input type='text' className='new-todo' ref='newTodo'/>
          <Button raised onClick={this.handleAdd} className='todo-button'>
            Add
          </Button>
          <h3>Start:</h3>
          <div className="input">
            <input type="text" value={this.state.m.format('llll')} 
            onClick={this.toggleCalendar} readOnly/>
          </div>
          <div className={this.state.isStartPickerVisible === true ? '' : 'hidden'} >
          <InputMoment moment={this.state.m} onChange={this.handleChange} minStep={5}/>
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

export default connect(({firebase}) => ({
  todos: dataToJS(firebase, 'todos')
}))(fbWrappedComponent);
