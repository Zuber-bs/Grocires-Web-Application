import React, { Component } from 'react';
import './Add.css';
import Item from './Item.jsx'

export class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
            quantity: 0
        };
        this.addItem = this.addItem.bind(this);
    }

    addItem(event) {
        const itemList = this.state.itemList;
        this.setState({
            itemList: itemList.concat(<Item key={itemList.length} quantity={this.state.quantity} />)
        });
    }

    render() {

        if(this.state.itemList.length === 1) {
            document.querySelector("button").disabled = true;
        }

        return (
            <div>
                <button
                    className="AddButton"
                    id="addButton"
                    onClick={this.addItem}
                >
                    New Item +
                </button>




                {this.state.itemList.map(function(input, index) {
                    return input;
                })}
            </div>
        );
    }
}