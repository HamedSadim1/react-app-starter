import LoginStatus from "./auth/LoginStatus";
import useCounter from "./counter/store";

const NavBar = () => {
  const counter = useCounter((s) => s.counter);

  return (
    <div className="card mb-8 flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-surface-500 dark:text-surface-400">
          Counter value:
        </span>
        <span className="badge badge-primary text-base">{counter}</span>
      </div>
      <LoginStatus />
    </div>
  );
};

export default NavBar;
