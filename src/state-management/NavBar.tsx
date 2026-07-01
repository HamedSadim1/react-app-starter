import LoginStatus from "./auth/LoginStatus";
import useCounter from "./counter/store";

const NavBar = () => {
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
