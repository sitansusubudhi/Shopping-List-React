import React from 'react';

const RemoveLastItem = props => {
  
  const { deleteLastItem, buttonDisabled } = props
  
  return (
    <button onClick={() => deleteLastItem()} disabled={buttonDisabled}>
      Delete Last Item
    </button>
  );
};

export default RemoveLastItem;