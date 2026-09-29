import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const TaskContext = createContext();

const initialTasks = [
  {
    id: "1",
    title: "Complete React Assignment",
    description:
      "Finish the online shopping cart and task manager assignments.",
    priority: "High",
    category: "Academic",
    raisedAt: new Date().toISOString(),
    dueDate: "2026-10-02",
    status: "Pending"
  },

  {
    id: "2",
    title: "Prepare DBMS Notes",
    description:
      "Revise normalization, Armstrong axioms and BCNF.",
    priority: "Medium",
    category: "Academic",
    raisedAt: new Date().toISOString(),
    dueDate: "2026-10-05",
    status: "Raised"
  },

  {
    id: "3",
    title: "Go for Evening Walk",
    description:
      "Take a relaxing evening walk and complete the daily activity.",
    priority: "Low",
    category: "Personal",
    raisedAt: new Date().toISOString(),
    dueDate: "2026-09-30",
    status: "Closed"
  },

  {
    id: "4",
    title: "Upload Project to GitHub",
    description:
      "Push the completed React project to the GitHub repository.",
    priority: "High",
    category: "Academic",
    raisedAt: new Date().toISOString(),
    dueDate: "2026-10-01",
    status: "Closed"
  }
];


export function TaskProvider({ children }) {

  const [tasks, setTasks] = useState(() => {

    const savedTasks =
      localStorage.getItem("taskManagerTasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return initialTasks;
  });


  useEffect(() => {

    localStorage.setItem(
      "taskManagerTasks",
      JSON.stringify(tasks)
    );

  }, [tasks]);


  // ADD TASK
  const addTask = (task) => {

    const newTask = {

      ...task,

      id:
        Date.now().toString(),

      raisedAt:
        new Date().toISOString(),

      status: "Raised"

    };


    setTasks(prev => [
      newTask,
      ...prev
    ]);

  };


  // UPDATE TASK
  const updateTask = (id, updatedTask) => {

    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? {
              ...task,
              ...updatedTask
            }
          : task
      )
    );

  };


  // DELETE TASK
  const deleteTask = (id) => {

    setTasks(prev =>
      prev.filter(
        task => task.id !== id
      )
    );

  };


  // CLOSE TASK
  const completeTask = (id) => {

    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? {
              ...task,
              status: "Closed"
            }
          : task
      )
    );

  };


  // REOPEN TASK
  const reopenTask = (id) => {

    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? {
              ...task,
              status: "Pending"
            }
          : task
      )
    );

  };


  return (

    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        completeTask,
        reopenTask
      }}
    >

      {children}

    </TaskContext.Provider>

  );
}


export function useTasks() {

  return useContext(TaskContext);

}