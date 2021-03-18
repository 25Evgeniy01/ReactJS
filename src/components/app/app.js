import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';
import AddItem from "../add-item";

export default class App extends Component {

  itemId = 0;
  mode = 0; //0 - all, 1 - done, 2 - active
  text = "";

  state = {
    todoData:[
      this.getDefaultItem('Drink Coffee'),
      this.getDefaultItem('Make Awesome App'),
      this.getDefaultItem('Have a lunch')
    ]
  }

  getDefaultItem(label) {
    return {
      label: label, isVisible: true, important: false, done: false, id: this.itemId++
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
    this.updateVisibleMode();
  }

  setImportantMark = (id) => {
    this.setState(({todoData}) => {
      return {
         todoData: this.changeProperty(todoData, id, "important")
       };
     });
  }

  onSearchItems = (e) => {

    this.text = e.target.value;

    this.updateVisibleMode();
  }

  getVisibleConnectWithMode(arr) {
      return arr.map((el) => {
        if (!this.text.length || el.label.indexOf(this.text) + 1) {
          switch (this.mode) {
            default:
            case 0:
              el.isVisible = true;
            break;
            case 1:
              (el.done) ? el.isVisible = true : el.isVisible = false;
            break;
            case 2:
              (!el.done) ? el.isVisible = true : el.isVisible = false;
            break;
          }
        } else {
          el.isVisible = false;
        }

        return el;
      });
  }

  updateVisibleMode() {
    this.setState(({todoData}) => {
      return {
        todoData: this.getVisibleConnectWithMode(todoData)
      }
    });
  }

  showActiveItems = () => {
    this.mode = 2;
    this.updateVisibleMode();
  }

  showDoneItems = () => {
    this.mode = 1;
    this.updateVisibleMode();
  }

  showAllItems = () => {
    this.mode = 0;
    this.updateVisibleMode();
  }

  render() {
    const {todoData} = this.state;

    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchItems={this.onSearchItems}/>
          <ItemStatusFilter
                  showActiveItems={this.showActiveItems}
                  showAllItems={this.showAllItems}
                  showDoneItems={this.showDoneItems}
          />
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
