import { Outlet } from "react-router-dom";
import UserList from "./UserList";

const UsersPage = () => {
  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h2 className="text-surface-900 dark:text-surface-100">Users</h2>
        <p className="text-sm text-surface-500 dark:text-surface-400">
          Select a user to view details
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <UserList />
        </aside>
        <section>
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default UsersPage;
