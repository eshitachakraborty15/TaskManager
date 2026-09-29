import {
  Link
} from "react-router-dom";

import {
  useTasks
} from "../context/TaskContext";


export default function TaskCard({
  task
}) {

  const {
    completeTask,
    reopenTask,
    deleteTask
  } = useTasks();


  return (

    <div className="task-card">

      <div className="task-card-top">

        <div>

          <span
            className={`priority ${task.priority.toLowerCase()}`}
          >
            {task.priority}
          </span>

          <span
            className={`category ${task.category.toLowerCase()}`}
          >
            {task.category}
          </span>

        </div>


        <span
          className={`status ${task.status.toLowerCase()}`}
        >
          {task.status}
        </span>

      </div>


      <h3>
        {task.title}
      </h3>


      <p className="task-description">
        {task.description}
      </p>


      <div className="task-meta">

        <div>

          <small>
            Due Date
          </small>

          <strong>
            {task.dueDate}
          </strong>

        </div>


        <div>

          <small>
            Raised
          </small>

          <strong>
            {new Date(
              task.raisedAt
            ).toLocaleDateString()}
          </strong>

        </div>

      </div>


      <div className="task-actions">

        <Link
          className="view-btn"
          to={`/tasks/${task.id}`}
        >
          View Details
        </Link>


        {task.status === "Closed" ? (

          <button
            className="reopen-btn"
            onClick={() =>
              reopenTask(task.id)
            }
          >
            Reopen
          </button>

        ) : (

          <button
            className="complete-btn"
            onClick={() =>
              completeTask(task.id)
            }
          >
            Complete
          </button>

        )}


        <button
          className="delete-btn"
          onClick={() => {

            if (
              window.confirm(
                "Delete this task?"
              )
            ) {

              deleteTask(task.id);

            }

          }}
        >
          Delete
        </button>

      </div>

    </div>

  );
}