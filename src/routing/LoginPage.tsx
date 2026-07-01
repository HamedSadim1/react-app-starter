import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="animate-fade-in mx-auto max-w-sm pt-12">
      <div className="card space-y-6">
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 text-2xl dark:bg-primary-900">
            🔐
          </div>
          <h2 className="text-surface-900 dark:text-surface-100">
            Welcome back
          </h2>
          <p className="text-sm text-surface-500 dark:text-surface-400">
            Sign in to your account
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-surface-700 dark:text-surface-300">
              Email
            </label>
            <input
              type="email"
              className="input"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-surface-700 dark:text-surface-300">
              Password
            </label>
            <input type="password" className="input" placeholder="••••••••" />
          </div>
          <button type="submit" className="btn-primary w-full">
            Sign In
          </button>
        </form>

        <p className="text-center text-xs text-surface-400 dark:text-surface-500">
          This is a demo.{" "}
          <Link
            to="/"
            className="font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400"
          >
            Go home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
