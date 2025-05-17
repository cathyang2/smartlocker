import React, { useState } from 'react';

export default function Items() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() === '') return;
    setItems([...items, newItem.trim()]);
    setNewItem('');
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="items-container">
      <h2>Items in Locker</h2>

      <div className="add-item-form">
        <input
          type="text"
          value={newItem}
          placeholder="Enter item name"
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      <ul className="items-list">
        {items.length === 0 ? (
          <li>No items in the locker.</li>
        ) : (
          items.map((item, index) => (
            <li key={index} className="item-entry">
              {item}
              <button onClick={() => handleRemoveItem(index)}>Remove</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
