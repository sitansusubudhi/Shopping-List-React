import React, { Component } from 'react'

class AddItem extends Component {
state = {
  	text: ''
  }

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

   addItem = event => {
    event.preventDefault();
    this.props.addItem(this.state.text);
     this.setState(() => ({
     	text: ''
     }));
  };

   inputIsEmpty = () => {
    return this.state.text === '';
  };

  displayText = (formText) => {
  	this.setState(() => ({
    	text: formText
    }))
  }

	render() {
    	return (
      		<div>
      		<form onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter New Item"
              value={this.state.text}
              onChange={this.handleChange}
            />

			<button disabled={this.inputIsEmpty()}>Add</button>
			</form>
			</div>
      	)
    }
}

export default AddItem;