import {
  Link
} from "react-router-dom";

import {
  useTasks
} from "../context/TaskContext";


export default function Dashboard() {

  const {
    tasks
  } = useTasks();


  const total =
    tasks.length;

  const pending =
    tasks.filter(
      task =>
        task.status !== "Closed"
    ).length;

  const completed =
    tasks.filter(
      task =>
        task.status === "Closed"
    ).length;

  const highPriority =
    tasks.filter(
      task =>
        task.priority === "High" &&
        task.status !== "Closed"
    ).length;


  const recentTasks =
    tasks.slice(0, 4);


  return (

    <div className="page">

      <div className="page-header">

        <div>

          <p className="eyebrow">
            OVERVIEW
          </p>

          <h1>
            Dashboard
          </h1>

          <p>
            Welcome to your personal
            task management workspace.
          </p>

        </div>


        <Link
          className="primary-btn"
          to="/add-task"
        >
          + Create Task
        </Link>

      </div>


      <div className="stats-grid">

        <div className="stat-card purple">

          <span>
            Total Tasks
          </span>

          <strong>
            {total}
          </strong>

          <small>
            All your tasks
          </small>

        </div>


        <div className="stat-card orange">

          <span>
            Pending
          </span>

          <strong>
            {pending}
          </strong>

          <small>
            Need attention
          </small>

        </div>


        <div className="stat-card green">

          <span>
            Completed
          </span>

          <strong>
            {completed}
          </strong>

          <small>
            Successfully closed
          </small>

        </div>


        <div className="stat-card red">

          <span>
            High Priority
          </span>

          <strong>
            {highPriority}
          </strong>

          <small>
            Active urgent tasks
          </small>

        </div>

      </div>


      <div className="dashboard-section">

        <div className="section-title">

          <div>

            <h2>
              Recent Tasks
            </h2>

            <p>
              Your latest tasks
            </p>

          </div>


          <Link to="/tasks">
            View All →
          </Link>

        </div>


        <div className="task-grid">

          {recentTasks.map(task => (

            <div
              className="mini-task"
              key={task.id}
            >

              <div>

                <span
                  className={`priority ${task.priority.toLowerCase()}`}
                >
                  {task.priority}
                </span>

                <h3>
                  {task.title}
                </h3>

                <p>
                  {task.description}
                </p>

              </div>


              <Link
                to={`/tasks/${task.id}`}
              >
                Open →
              </Link>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}