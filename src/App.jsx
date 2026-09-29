import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Navbar
  from "./components/Navbar";

import ProtectedRoute
  from "./components/ProtectedRoute";


import Login
  from "./pages/Login";

import Dashboard
  from "./pages/Dashboard";

import Tasks
  from "./pages/Tasks";

import AddTask
  from "./pages/AddTask";

import TaskDetails
  from "./pages/TaskDetails";

import CompletedTasks
  from "./pages/CompletedTasks";


function ProtectedLayout({
  children
}) {

  return (

    <ProtectedRoute>

      <Navbar />

      {children}

    </ProtectedRoute>

  );

}


export default function App() {

  return (

    <BrowserRouter>

      <Routes>


        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />


        {/* DASHBOARD */}

        <Route
          path="/"
          element={
            <ProtectedLayout>
              <Dashboard />
            </ProtectedLayout>
          }
        />


        {/* TASKS */}

        <Route
          path="/tasks"
          element={
            <ProtectedLayout>
              <Tasks />
            </ProtectedLayout>
          }
        />


        {/* ADD TASK */}

        <Route
          path="/add-task"
          element={
            <ProtectedLayout>
              <AddTask />
            </ProtectedLayout>
          }
        />


        {/* URL PARAMETER */}

        <Route
          path="/tasks/:id"
          element={
            <ProtectedLayout>
              <TaskDetails />
            </ProtectedLayout>
          }
        />


        {/* COMPLETED */}

        <Route
          path="/completed"
          element={
            <ProtectedLayout>
              <CompletedTasks />
            </ProtectedLayout>
          }
        />


      </Routes>

    </BrowserRouter>

  );
}