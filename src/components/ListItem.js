import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

/*
export default function Overview(props) {
  const [currentItem, setCurrentItem] = React.useState('');
  const [editMode, setEditMode] = React.useState(false);
  const editTask = (task) => {
    setCurrentItem(task);
    setEditMode(true);
  };
  console.log('edit mode ', editMode);
  console.log('current item ', currentItem);
  const taskElements = props.taskList.map((task) => {
    return (
      <li key={task.id}>
        {editMode && currentItem === task.id ? (
          <div>
            <input
              type="text"
              onChange={props.handleEdit}
              value={task.taskName}
              name="editTaskName"
            />
            <div className="actions">
              <FontAwesomeIcon
                onClick={() => props.handleEdit(task.id)}
                icon="fa-solid fa-square-plus"
                color="rgb(147 30 140)"
              />
              <FontAwesomeIcon
                onClick={() => props.handleDelete(task.id)}
                icon="fa-solid fa-trash"
                color="rgb(147 30 140)"
              />
            </div>
          </div>
        ) : (
          <div>
            {task.taskName} - {task.id}
            <div className="actions">
              <FontAwesomeIcon
                icon="fa-solid fa-pen-to-square"
                color="rgb(147 30 140)"
                onClick={() => editTask(task.id)}
              />
              <FontAwesomeIcon
                onClick={() => props.handleDelete(task.id)}
                icon="fa-solid fa-trash"
                color="rgb(147 30 140)"
              />
            </div>
          </div>
        )}
      </li>
    );
  });

  return (
    <section>
      <h2>My tasks</h2>
      <ul className="taskList">{taskElements}</ul>
    </section>
  );
}
*/

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
