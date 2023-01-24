import React from 'react';
import Overview from './components/Overview';
import { nanoid } from 'nanoid';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faSquarePlus,
  faTrash,
  faPenToSquare
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faSquarePlus, faTrash, faPenToSquare);

function App() {
  const [taskInfo, setTaskInfo] = React.useState({
    taskName: '',
    id: ''
  });
  const [taskList, setTaskList] = React.useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTaskInfo((prevData) => ({
      ...prevData,
      [name]: value,
      id: nanoid()
    }));
    console.log('change ', taskInfo);
  };
  const onSubmitTask = (event) => {
    event.preventDefault();

    setTaskList((oldList) => {
      return (oldList = [...oldList, taskInfo]);
    });
  };
  const handleDelete = (id) => {
    setTaskList((oldList) => {
      return oldList.filter((task) => task.id !== id);
    });
  };
  const handleEdit = (event,id, newValue) => {
    const { name, value } = event.target;
    const newList = taskList.map((item) => {
      if (item.id === id) {
        //return { ...item, name: newValue };
        setTaskInfo((prevData) => ({
          ...prevData,
          [name]: value,
          id: nanoid()
        }));
      }
      return newList;
    });
    setTaskList(newList);
  };
  return (
    <main>
      <h1>Task list</h1>
      <div className="form-control">
        <input
          className="input"
          type="text"
          placeholder="new task"
          onChange={handleChange}
          value={taskInfo.taskName}
          name="taskName"
        />

        <button onClick={onSubmitTask}>
          <FontAwesomeIcon icon="fa-solid fa-square-plus" />
        </button>
      </div>
      <Overview
        taskList={taskList}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </main>
  );
}

export default App;
