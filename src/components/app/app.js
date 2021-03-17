import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';
import AddItem from "../add-item";

export default class App extends Component {

  itemId = 0;

  state = {
    todoData:[
      { label: 'Drink Coffee', important: false, id: this.itemId++ },
      { label: 'Make Awesome App', important: true, id: this.itemId++ },
      { label: 'Have a lunch', important: false, id: this.itemId++ }
    ]
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const index = todoData.findIndex((el) => el.id === id);

      return {
        todoData: [...todoData.slice(0, index),
                    ...todoData.slice(index+1)]
      };
    });
  }

  addItem = (text) => {
    this.setState(({todoData}) => {
      return {
        todoData: [...todoData,
          ...[{ label: text, important: false, id: this.itemId++ }]]
      };
    });
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={this.state.todoData}
          onDeleted={ this.deleteItem } />

          <div className="bottom-panel d-flex">
            <AddItem addItem={ this.addItem }/>
          </div>
      </div>
    );
  }

};
