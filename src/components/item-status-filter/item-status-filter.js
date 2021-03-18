import React, { Component } from 'react';

import './item-status-filter.css';


export default class ItemStatusFilter extends Component {
  state = {
    className: this.setActiveState(0)
  };

  setActiveState(i) {
    let classes = [
      "btn btn-outline-secondary",
      "btn btn-outline-secondary",
      "btn btn-outline-secondary"
    ];
    classes[i] = "btn btn-info";
    return classes;
  }

  render() {
    return (
      <div className="btn-group">
        <button type="button"
                className={this.state.className[0]}
                onClick={() => {
                  this.setState(() => {
                    const newClassNames = this.setActiveState(0);

                    return {
                      className: newClassNames
                    }
                  });
                    this.props.showAllItems()
                  }}>All</button>
        <button type="button"
                className={this.state.className[1]}
                onClick={() => {
                  this.setState(() => {
                    const newClassNames = this.setActiveState(1);

                    return {
                      className: newClassNames
                    }
                  });
                    this.props.showActiveItems()
                  }}>Active</button>
        <button type="button"
                className={this.state.className[2]}
                onClick={() => {
                  this.setState(() => {
                    const newClassNames = this.setActiveState(2);

                    return {
                      className: newClassNames
                    }
                  });
                  this.props.showDoneItems()
                  }}>Done</button>
      </div>
    );
  }
}
