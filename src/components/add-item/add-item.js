import React, {Component} from 'react';
import './add-item.css';

class AddItem extends Component {
    render() {
        return (
            <div className="add-item">
                <button type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => {
                            this.props.addItem("New Item")
                        }}>
                    Add Item
                </button>
            </div>

        )
    }

}

export default AddItem;