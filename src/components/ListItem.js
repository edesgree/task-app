import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function ListItem(props) {
  return (
    <li key={props.item}>
      {props.editing === props.index ? (
        <div>
          <input
            value={props.input}
            onChange={(e) => props.setInput(e.target.value)}
          />

          <FontAwesomeIcon
            onClick={props.handleSubmit}
            icon="fas fa-save"
            color="rgb(147 30 140)"
          />
        </div>
      ) : (
        <div>
          {props.item}

          <div className="actions">
            <FontAwesomeIcon
              icon="fa-solid fa-pen-to-square"
              color="rgb(147 30 140)"
              onClick={() => props.handleEdit(props.index)}
            />
            <FontAwesomeIcon
              onClick={() => props.handleDelete(props.index)}
              icon="fa-solid fa-trash"
              color="rgb(147 30 140)"
            />
          </div>
        </div>
      )}
    </li>
  );
}
