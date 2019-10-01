import React from 'react';

function ListItems(props) {
  
  const {items} = props;
  
	return (
      <div>
    	<p className="items">Items</p>
        <ol className="item-list">
          {items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
  	  </div>
    )
}

export default ListItems