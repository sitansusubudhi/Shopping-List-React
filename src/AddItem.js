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
			</form>
			<button disabled={this.inputIsEmpty()}>Add</button>
			</div>
      	)
    }
}

export default AddItem;