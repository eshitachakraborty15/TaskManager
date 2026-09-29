import {
  Link
} from "react-router-dom";

import {
  useTasks
} from "../context/TaskContext";


export default function CompletedTasks() {

  const {
    tasks
  } = useTasks();


  const completed =
    tasks.filter(
      task =>
        task.status === "Closed"
    );


  return (

    <div className="page">

      <div className="page-header">

        <div>

          <p className="eyebrow">
            COMPLETED
          </p>

          <h1>
            Completed Tasks
          </h1>

          <p>
            Tasks that you've successfully
            finished.
          </p>

        </div>

      </div>


      {completed.length === 0 ? (

        <div className="no-results">

          <div>
            ✓
          </div>

          <h2>
            No completed tasks yet
          </h2>

          <p>
            Complete a task and it will
            appear here.
          </p>

        </div>

      ) : (

        <div className="task-grid">

          {completed.map(task => (

            <div
              className="completed-card"
              key={task.id}
            >

              <div className="completed-check">
                ✓
              </div>


              <div>

                <span className="completed-label">
                  COMPLETED
                </span>

                <h3>
                  {task.title}
                </h3>

                <p>
                  {task.description}
                </p>

                <small>
                  Due: {task.dueDate}
                </small>

              </div>


              <Link
                to={`/tasks/${task.id}`}
              >
                View →
              </Link>

            </div>

          ))}

        </div>

      )}

    </div>

  );
}