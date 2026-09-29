import {
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  useTasks
} from "../context/TaskContext";


export default function AddTask() {

  const navigate =
    useNavigate();

  const {
    addTask
  } = useTasks();


  const [form, setForm] =
    useState({

      title: "",

      description: "",

      priority: "Medium",

      category: "Academic",

      dueDate: ""

    });


  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]:
        e.target.value

    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();


    if (
      !form.title.trim() ||
      !form.description.trim() ||
      !form.dueDate
    ) {

      alert(
        "Please fill all required fields."
      );

      return;
    }


    addTask(form);


    navigate("/tasks");

  };


  return (

    <div className="page">

      <div className="page-header">

        <div>

          <p className="eyebrow">
            TASK CREATION
          </p>

          <h1>
            Add New Task
          </h1>

          <p>
            Create a new task and keep
            track of its progress.
          </p>

        </div>

      </div>


      <form
        className="task-form"
        onSubmit={handleSubmit}
      >

        <div className="form-group full">

          <label>
            Task Header *
          </label>

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter task title"
          />

        </div>


        <div className="form-group full">

          <label>
            Task Description *
          </label>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe your task..."
            rows="5"
          />

        </div>


        <div className="form-group">

          <label>
            Priority
          </label>

          <select
            name="priority"
            value={form.priority}
            onChange={handleChange}
          >

            <option value="High">
              High
            </option>

            <option value="Medium">
              Medium
            </option>

            <option value="Low">
              Low
            </option>

          </select>

        </div>


        <div className="form-group">

          <label>
            Category
          </label>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
          >

            <option value="Academic">
              Academic
            </option>

            <option value="Personal">
              Personal
            </option>

          </select>

        </div>


        <div className="form-group">

          <label>
            Due Date *
          </label>

          <input
            type="date"
            name="dueDate"
            value={form.dueDate}
            onChange={handleChange}
          />

        </div>


        <div className="automatic-field">

          <span>
            Raised Date & Time
          </span>

          <strong>
            Automatically picked when
            the task is created
          </strong>

        </div>


        <div className="form-actions">

          <button
            type="button"
            className="cancel-btn"
            onClick={() =>
              navigate("/tasks")
            }
          >
            Cancel
          </button>


          <button
            type="submit"
            className="primary-btn"
          >
            Create Task
          </button>

        </div>

      </form>

    </div>

  );
}