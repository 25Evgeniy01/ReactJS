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
      this.getDefaultItem('Drink Coffee'),
      this.getDefaultItem('Make Awesome App'),
      this.getDefaultItem('Have a lunch')
    ]
  }

  getDefaultItem(label) {
    return {
      label: label, important: false, done: false, id: this.itemId++
    }
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
          ...[this.getDefaultItem(text)]]
      };
    });
  }

  changeProperty(arr, id, propName) {
    const index = arr.findIndex((el) => el.id === id);

    const oldItem = arr[index];
    const newItem = {
      ...oldItem, [propName]: !oldItem[propName]
    };

    return [...arr.slice(0, index),
                  newItem,
                  ...arr.slice(index+1)]
    ;
  }

  setDoneMark = (id) => {
    this.setState(({todoData}) => {
     return {
        todoData: this.changeProperty(todoData, id, "done")
      };
    });
  }

  setImportantMark = (id) => {
    this.setState(({todoData}) => {
      return {
         todoData: this.changeProperty(todoData, id, "important")
       };
     });
  }

  render() {
    const {todoData} = this.state;

    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={this.state.todoData}
          onDeleted={ this.deleteItem }
          onMarkImportant={ this.setImportantMark }
          onLabelClick={ this.setDoneMark } />

          <div className="bottom-panel d-flex">
            <AddItem addItem={ this.addItem }/>
          </div>
      </div>
    );
  }

};
