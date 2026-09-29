import {
  useState
} from "react";

import {
  useTasks
} from "../context/TaskContext";

import TaskCard from "../components/TaskCard";

import {
  Link
} from "react-router-dom";


export default function Tasks() {

  const {
    tasks
  } = useTasks();


  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [priorityFilter, setPriorityFilter] =
    useState("All");


  const filteredTasks =
    tasks.filter(task => {

      const matchesSearch =
        task.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        task.description
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );


      const matchesStatus =
        statusFilter === "All" ||
        task.status === statusFilter;


      const matchesPriority =
        priorityFilter === "All" ||
        task.priority === priorityFilter;


      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority
      );

    });


  return (

    <div className="page">

      <div className="page-header">

        <div>

          <p className="eyebrow">
            TASK MANAGEMENT
          </p>

          <h1>
            All Tasks
          </h1>

          <p>
            Search, filter and manage
            your tasks.
          </p>

        </div>


        <Link
          className="primary-btn"
          to="/add-task"
        >
          + Add Task
        </Link>

      </div>


      <div className="filters">

        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={e =>
            setSearch(e.target.value)
          }
        />


        <select
          value={statusFilter}
          onChange={e =>
            setStatusFilter(e.target.value)
          }
        >

          <option value="All">
            All Status
          </option>

          <option value="Raised">
            Raised
          </option>

          <option value="Pending">
            Pending
          </option>

          <option value="Closed">
            Closed
          </option>

        </select>


        <select
          value={priorityFilter}
          onChange={e =>
            setPriorityFilter(e.target.value)
          }
        >

          <option value="All">
            All Priority
          </option>

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


      <div className="results-count">

        Showing {filteredTasks.length}
        {" "}task(s)

      </div>


      <div className="task-grid">

        {filteredTasks.length > 0 ? (

          filteredTasks.map(task => (

            <TaskCard
              key={task.id}
              task={task}
            />

          ))

        ) : (

          <div className="no-results">

            <div>
              ✓
            </div>

            <h2>
              No tasks found
            </h2>

            <p>
              Try changing your search
              or filters.
            </p>

          </div>

        )}

      </div>

    </div>

  );
}