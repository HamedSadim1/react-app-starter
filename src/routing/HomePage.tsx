import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="animate-fade-in space-y-12">
      {/* Hero section */}
      <section className="text-center">
        <div className="mx-auto max-w-2xl space-y-6 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-surface-900 dark:text-surface-50 sm:text-5xl">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              My App
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-surface-500 dark:text-surface-400">
            A modern React application built with TypeScript, React Router,
            React Query, and Zustand. Explore the features below.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/users" className="btn-primary">
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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
              View Users
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "State Management",
            description:
              "Powered by Zustand with built-in DevTools for seamless debugging.",
            icon: "⚡",
          },
          {
            title: "Data Fetching",
            description:
              "React Query handles caching, pagination, and optimistic updates.",
            icon: "📡",
          },
          {
            title: "Routing",
            description:
              "React Router v7 with nested routes, private routes, and error boundaries.",
            icon: "🗺️",
          },
        ].map((feature, i) => (
          <div
            key={feature.title}
            className="card animate-fade-in"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="mb-3 text-3xl">{feature.icon}</div>
            <h3 className="mb-2 text-surface-900 dark:text-surface-100">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-surface-500 dark:text-surface-400">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
