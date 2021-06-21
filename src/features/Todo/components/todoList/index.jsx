import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import classnames from 'classnames';

todoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

todoList.defaultProps = {
  todoList: [],
  onTodoClick: null
};

function todoList(props) {

  const {todoList,onTodoClick} = props;

  const handleTodoClick = (todo,idx) => {
    if (!onTodoClick) return;
    onTodoClick(todo,idx)
  }

  return (
    <u className="todo-list">
      {
        todoList.map((todo,idx  )=> (
          <li
            className={classnames({
              'todo-item': true,
              completed: todo.status === 'completed'  
            })}
            key={todo.id}

            onClick={()=>handleTodoClick(todo,idx)}
          >
            {todo.title}
          </li>
        ))}
    </u>
  );
}

export default todoList;