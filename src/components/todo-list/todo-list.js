import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onLabelClick, onMarkImportant }) => {

  const elements = todos.map((item) => {
    const { id, isVisible, ...itemProps } = item;

    let classNames = "list-group-item";

    if (!isVisible) classNames += " d-none";
    return (
      <li key={id} className={classNames}>
        <TodoListItem {...itemProps }
          onDeleted = {() => {
              onDeleted(id)
            }
          }
          onLabelClick = {
            () => {
              onLabelClick(id)
            }
          }
          onMarkImportant = {
            () => {
              onMarkImportant(id)
            }
          } />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
