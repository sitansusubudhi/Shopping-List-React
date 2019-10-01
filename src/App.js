import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems';
import AddItem from './AddItem';
import RemoveLastItem from './RemoveLastItem';

class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  handleAddItem = item => {
    this.setState(oldState => ({
      items: [...oldState.items, item],
    }));
  };

  handleDeleteLastItem = () => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };


  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
    
    	{/*Add Item to List*/}
		
        <AddItem addItem={this.handleAddItem} />
          
		{/*Remove Item */}
		<RemoveLastItem deleteLastItem={this.handleDeleteLastItem} buttonDisabled={this.noItemsFound()}/>

		{/*List item*/}
		<ListItems items={this.state.items} />
        
      </div>
    );
  }
}

export default App;
