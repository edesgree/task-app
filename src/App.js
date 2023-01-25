import React, { useState } from 'react';
import ListItem from './components/ListItem';
import { nanoid } from 'nanoid';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faSquarePlus,
  faTrash,
  faPenToSquare,
  faSave
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faSquarePlus, faTrash, faPenToSquare, faSave);
function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('myTasks')) || []
  );
  const [input, setInput] = useState('');
  const [editing, setEditing] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== '') {
      if (editing !== null) {
        const newItems = [...items];
        newItems[editing] = input;
        setItems(newItems);
        setEditing(null);
      } else {
        setItems([...items, input]);
      }
      setInput('');
    } else {
      console.log('ooo');
    }
  };

  const handleEdit = (index) => {
    setEditing(index);
    setInput(items[index]);
  };

  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  React.useEffect(() => {
    localStorage.setItem('myTasks', JSON.stringify(items));
  }, [items]);
  return (
    <div>
      <h1>Task list</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            value={editing === null ? input : ''}
            onChange={(e) => setInput(e.target.value)}
            disabled={editing !== null ? true : false}
          />
          <button type="submit" disabled={editing !== null ? true : false}>
            <FontAwesomeIcon
              icon="fa-solid fa-square-plus"
              color="rgb(147 30 140)"
            />
          </button>
        </div>
      </form>
      <section>
        <h2>My tasks</h2>
        <ul className="taskList">
          {items.map((item, index) => (
            <ListItem
              key={item}
              item={item}
              index={index}
              editing={editing}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              handleSubmit={handleSubmit}
              input={input}
              setInput={setInput}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
