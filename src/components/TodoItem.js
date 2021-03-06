import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { firebase } from 'react-redux-firebase';
import {InputMoment} from 'input-moment';
import Button from 'material-ui/Button';
import moment from 'moment';
import './Todo.css';

class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object,
    id: PropTypes.string
  };

  render(){
    const {firebase, todo, id} = this.props;

    const toggleDone = () => {
      firebase.set(`/todos/${id}/done`, !todo.done);
    };

    const deleteTodo = (event) => {
       firebase.remove(`/todos/${id}`)
    };
    return (
      <li className="Todo">
        <input
          className="Todo-Input"
          type="checkbox"
          checked={todo.done}
          onChange={toggleDone}
        />
        {todo.text || todo.name} |  {moment(todo.date).format('DD.MM.YYYY HH:mm')}
        <Button className="Todo-Button" onClick={deleteTodo}>
          Delete
        </Button>
      </li>
    );
  };
};
export default firebase()(TodoItem);
