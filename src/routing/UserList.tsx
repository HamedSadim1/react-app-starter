import { NavLink } from "react-router-dom";

const UserList = () => {
  const users = [
    { id: 1, name: "Mosh" },
    { id: 2, name: "John" },
    { id: 3, name: "Alice" },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-primary-100 text-primary-700 shadow-sm dark:bg-primary-900/50 dark:text-primary-300"
        : "text-surface-600 hover:bg-surface-100 dark:text-surface-400 dark:hover:bg-surface-800"
    }`;

  return (
    <div className="card space-y-1">
      <ul className="space-y-1">
        {users.map((user) => (
          <li key={user.id}>
            <NavLink to={`/users/${user.id}`} className={linkClass}>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-primary-600 text-sm font-bold text-white shadow-sm">
                {user.name.charAt(0)}
              </span>
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
