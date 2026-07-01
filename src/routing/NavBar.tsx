import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300"
        : "text-surface-600 hover:text-surface-900 hover:bg-surface-100 dark:text-surface-400 dark:hover:text-surface-100 dark:hover:bg-surface-800"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-surface-200 bg-white/80 shadow-sm backdrop-blur-lg transition-colors duration-300 dark:border-surface-800 dark:bg-surface-900/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 32 32"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            My App
          </NavLink>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 sm:flex">
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/users" className={linkClass}>
              Users
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>

            <div className="ml-4 h-6 w-px bg-surface-200 dark:bg-surface-700" />

            {/* Dark mode toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="rounded-lg p-2 text-surface-500 transition-all duration-200 hover:bg-surface-100 hover:text-surface-700 dark:text-surface-400 dark:hover:bg-surface-800 dark:hover:text-surface-200"
              aria-label="Toggle dark mode"
            >
              {dark ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-surface-500 transition-colors hover:bg-surface-100 hover:text-surface-700 sm:hidden dark:text-surface-400 dark:hover:bg-surface-800"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="animate-fade-in border-t border-surface-200 pb-4 pt-2 sm:hidden dark:border-surface-800">
            <NavLink
              to="/"
              end
              onClick={() => setMenuOpen(false)}
              className={linkClass}
            >
              Home
            </NavLink>
            <NavLink
              to="/users"
              onClick={() => setMenuOpen(false)}
              className={linkClass}
            >
              Users
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={linkClass}
            >
              Contact
            </NavLink>
            <button
              onClick={() => setDark(!dark)}
              className="mt-2 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-surface-600 transition-colors hover:bg-surface-100 dark:text-surface-400 dark:hover:bg-surface-800"
            >
              {dark ? "☀️ Light mode" : "🌙 Dark mode"}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
