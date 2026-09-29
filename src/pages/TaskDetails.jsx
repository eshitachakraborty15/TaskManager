import {
  Link,
  useNavigate,
  useParams
} from "react-router-dom";

import {
  useState
} from "react";

import {
  useTasks
} from "../context/TaskContext";


export default function TaskDetails() {

  const {
    id
  } = useParams();

  const navigate =
    useNavigate();


  const {
    tasks,
    updateTask,
    deleteTask,
    completeTask,
    reopenTask
  } = useTasks();


  const task =
    tasks.find(
      item => item.id === id
    );


  const [editing, setEditing] =
    useState(false);


  const [form, setForm] =
    useState(
      task || {}
    );


  if (!task) {

    return (

      <div className="page">

        <div className="not-found">

          <h1>
            Task Not Found
          </h1>

          <p>
            The requested task does
            not exist.
          </p>

          <Link
            className="primary-btn"
            to="/tasks"
          >
            Back to Tasks
          </Link>

        </div>

      </div>

    );

  }


  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]:
        e.target.value

    });

  };


  const saveChanges = () => {

    updateTask(
      task.id,
      {
        title: form.title,
        description: form.description,
        priority: form.priority,
        category: form.category,
        dueDate: form.dueDate
      }
    );

    setEditing(false);

  };


  const handleDelete = () => {

    if (
      window.confirm(
        "Are you sure you want to delete this task?"
      )
    ) {

      deleteTask(task.id);

      navigate("/tasks");

    }

  };


  return (

    <div className="page">

      <Link
        className="back-link"
        to="/tasks"
      >
        ← Back to Tasks
      </Link>


      <div className="details-card">

        <div className="details-header">

          <div>

            <div className="badge-row">

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

              <span
                className={`status ${task.status.toLowerCase()}`}
              >
                {task.status}
              </span>

            </div>


            {!editing ? (

              <h1>
                {task.title}
              </h1>

            ) : (

              <input
                className="edit-title"
                name="title"
                value={form.title}
                onChange={handleChange}
              />

            )}

          </div>


          <div className="details-actions">

            {!editing && (

              <button
                className="secondary-action"
                onClick={() =>
                  setEditing(true)
                }
              >
                Edit
              </button>

            )}

            <button
              className="delete-action"
              onClick={handleDelete}
            >
              Delete
            </button>

          </div>

        </div>


        {!editing ? (

          <>

            <div className="description-box">

              <h3>
                Description
              </h3>

              <p>
                {task.description}
              </p>

            </div>


            <div className="details-grid">

              <div>

                <span>
                  Priority
                </span>

                <strong>
                  {task.priority}
                </strong>

              </div>


              <div>

                <span>
                  Category
                </span>

                <strong>
                  {task.category}
                </strong>

              </div>


              <div>

                <span>
                  Raised Date & Time
                </span>

                <strong>
                  {new Date(
                    task.raisedAt
                  ).toLocaleString()}
                </strong>

              </div>


              <div>

                <span>
                  Due Date
                </span>

                <strong>
                  {task.dueDate}
                </strong>

              </div>

            </div>

          </>

        ) : (

          <div className="edit-form">

            <label>
              Description
            </label>

            <textarea
              name="description"
              value={
                form.description
              }
              onChange={handleChange}
              rows="5"
            />


            <div className="edit-row">

              <div>

                <label>
                  Priority
                </label>

                <select
                  name="priority"
                  value={
                    form.priority
                  }
                  onChange={handleChange}
                >

                  <option>
                    High
                  </option>

                  <option>
                    Medium
                  </option>

                  <option>
                    Low
                  </option>

                </select>

              </div>


              <div>

                <label>
                  Category
                </label>

                <select
                  name="category"
                  value={
                    form.category
                  }
                  onChange={handleChange}
                >

                  <option>
                    Academic
                  </option>

                  <option>
                    Personal
                  </option>

                </select>

              </div>


              <div>

                <label>
                  Due Date
                </label>

                <input
                  type="date"
                  name="dueDate"
                  value={
                    form.dueDate
                  }
                  onChange={handleChange}
                />

              </div>

            </div>


            <div className="form-actions">

              <button
                className="cancel-btn"
                onClick={() =>
                  setEditing(false)
                }
              >
                Cancel
              </button>


              <button
                className="primary-btn"
                onClick={saveChanges}
              >
                Save Changes
              </button>

            </div>

          </div>

        )}


        <div className="status-actions">

          {task.status === "Closed" ? (

            <button
              className="reopen-large"
              onClick={() =>
                reopenTask(task.id)
              }
            >
              ↻ Reopen Task
            </button>

          ) : (

            <button
              className="complete-large"
              onClick={() =>
                completeTask(task.id)
              }
            >
              ✓ Mark as Completed
            </button>

          )}

        </div>

      </div>

    </div>

  );
}