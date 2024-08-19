import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import TasksContext from "./tasks/taskContext";
import useCounter from "./counter/store";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);
  console.log("Render Navbar");

  const counter = useCounter((s) => s.counter);
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
