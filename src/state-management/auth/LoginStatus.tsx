import useAuthStore from "./store";
import { DEMO_USERNAME } from "../../react-query/constants";

const LoginStatus = () => {
  const { login, user, logout } = useAuthStore();

  if (user)
    return (
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700 dark:bg-primary-900 dark:text-primary-300">
          {user.charAt(0).toUpperCase()}
        </div>
        <span className="text-sm font-medium text-surface-700 dark:text-surface-300">
          {user}
        </span>
        <button
          onClick={logout}
          className="rounded-lg px-3 py-1.5 text-sm font-medium text-surface-500 transition-all duration-200 hover:bg-surface-100 hover:text-error dark:text-surface-400 dark:hover:bg-surface-800 dark:hover:text-error"
        >
          Logout
        </button>
      </div>
    );
  return (
    <button
      onClick={() => login(DEMO_USERNAME)}
      className="btn-primary text-sm"
    >
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
        />
      </svg>
      Login
    </button>
  );
};

export default LoginStatus;
