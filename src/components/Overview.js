import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Overview(props) {
  const taskElements = props.taskList.map((task) => {
    return (
      <li key={task.id}>
        {task.taskName}
        <div className="actions">
          <FontAwesomeIcon
            icon="fa-solid fa-pen-to-square"
            color="rgb(147 30 140)"
          />
          <FontAwesomeIcon
            onClick={() => props.handleDelete(task.id)}
            icon="fa-solid fa-trash"
            color="rgb(147 30 140)"
          />
        </div>
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
