import { NavLink } from "react-router-dom";
import { DEMO_USERS } from "../react-query/constants";
import { userLinkClass } from "../utils/linkClasses";

const UserList = () => {
  return (
    <div className="card space-y-1">
      <ul className="space-y-1">
        {DEMO_USERS.map((user) => (
          <li key={user.id}>
            <NavLink to={`/users/${user.id}`} className={userLinkClass}>
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
