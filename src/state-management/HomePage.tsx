import Counter from "./counter/Counter";
import NavBar from "./NavBar";
import TaskList from "./tasks/TaskList";

const HomePage = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto max-w-6xl space-y-8 p-4 animate-fade-in">
      <NavBar />

      {/* Welcome Header */}
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-surface-200 dark:border-surface-800 pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-surface-900 dark:text-surface-50">
            Dashboard Overview
          </h1>
          <p className="text-surface-500 dark:text-surface-400 mt-2">
            Welcome back! Here's a snapshot of your activity today.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-surface-600 dark:text-surface-300 bg-surface-100 dark:bg-surface-800 px-4 py-2 rounded-xl w-fit shadow-sm">
          <span>📅</span> {currentDate}
        </div>
      </header>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-in">
        <div className="card bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border-primary-200 dark:border-primary-800/50">
          <h3 className="text-xs font-bold text-primary-700 dark:text-primary-300 uppercase tracking-wider">
            Active Modules
          </h3>
          <p className="text-4xl font-extrabold mt-3 text-primary-900 dark:text-primary-100">
            2
          </p>
        </div>
        <div className="card !border-success/20 bg-gradient-to-br from-success/10 to-success/5">
          <h3 className="text-xs font-bold text-success uppercase tracking-wider">
            Session Status
          </h3>
          <div className="flex items-center mt-3 gap-2">
            <div className="w-3 h-3 rounded-full bg-success animate-pulse"></div>
            <p className="text-2xl font-extrabold text-surface-900 dark:text-surface-50">
              Online
            </p>
          </div>
        </div>
        <div className="card !border-warning/20 bg-gradient-to-br from-warning/10 to-warning/5">
          <h3 className="text-xs font-bold text-warning uppercase tracking-wider">
            Unread Alerts
          </h3>
          <p className="text-4xl font-extrabold mt-3 text-surface-900 dark:text-surface-50">
            0
          </p>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-lg font-semibold text-surface-900 dark:text-surface-50">
              Global Counter
            </h2>
            <span className="badge badge-primary">Zustand</span>
          </div>
          <Counter />
        </div>

        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-lg font-semibold text-surface-900 dark:text-surface-50">
              Task Management
            </h2>
            <span className="text-xs font-medium text-surface-500">
              Real-time sync
            </span>
          </div>
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
