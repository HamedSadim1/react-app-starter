import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="animate-fade-in space-y-16 pb-12">
      {/* Hero section */}
      <section className="relative overflow-hidden pt-20 pb-16 text-center lg:pt-32 lg:pb-24">
        {/* Animated Background glass effect */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-400 to-primary-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-4xl px-4 space-y-8">
          <div className="flex justify-center animate-slide-in">
            <span className="badge badge-primary px-4 py-1.5 text-sm shadow-sm ring-1 ring-primary-500/20">
              ✨ Discover the Next Generation
            </span>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight text-surface-900 dark:text-surface-50 sm:text-7xl">
            Build Faster With{" "}
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              React Mastery
            </span>
          </h1>

          <p
            className="mx-auto max-w-2xl text-xl leading-relaxed text-surface-500 dark:text-surface-400 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            A meticulously crafted architecture using TypeScript, React Router
            v7, React Query, and Zustand. Scale your ideas from zero to
            production seamlessly.
          </p>

          <div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <Link to="/users" className="btn-primary px-8 py-4 text-base">
              Get Started Now
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
            <Link to="/contact" className="btn-secondary px-8 py-4 text-base">
              View the Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="mx-auto max-w-6xl px-4 animate-scale-in"
        style={{ animationDelay: "300ms" }}
      >
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 bg-surface-100 dark:bg-surface-900/50 rounded-3xl p-8 border border-surface-200 dark:border-surface-800 shadow-sm">
          {[
            { value: "500+", label: "Active Users" },
            { value: "99.9%", label: "Uptime" },
            { value: "<10ms", label: "Latency" },
            { value: "24/7", label: "Support Coverage" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-extrabold text-surface-900 dark:text-surface-50">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-surface-500 dark:text-surface-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature cards */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-surface-900 dark:text-surface-50">
            Everything you need to succeed
          </h2>
          <p className="mt-4 text-lg text-surface-500 dark:text-surface-400">
            Carefully integrated tools for modern web development.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "State Management",
              description:
                "Powered by Zustand with built-in DevTools for seamless, predictable debugging.",
              icon: "⚡",
            },
            {
              title: "Data Fetching",
              description:
                "React Query handles caching, background updates, and optimistic pagination automatically.",
              icon: "📡",
            },
            {
              title: "Routing Strategy",
              description:
                "React Router v7 with nested routes, private routes, and robust error boundaries setup.",
              icon: "🗺️",
            },
          ].map((feature, i) => (
            <div
              key={feature.title}
              className="card group hover:-translate-y-1.5 transition-all duration-300 animate-fade-in hover:border-primary-300 dark:hover:border-primary-700"
              style={{ animationDelay: `${(i + 4) * 100}ms` }}
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-900/30 text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-surface-900 dark:text-surface-100">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-surface-500 dark:text-surface-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="text-center mb-8">
          <h3 className="text-sm font-bold text-surface-500 dark:text-surface-500 uppercase tracking-widest">
            Built with modern technology
          </h3>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
          <span className="text-2xl font-black text-surface-800 dark:text-surface-200">
            React 19
          </span>
          <span className="text-2xl font-black text-blue-600 dark:text-blue-400">
            TypeScript
          </span>
          <span className="text-2xl font-black text-purple-600 dark:text-purple-400">
            Vite
          </span>
          <span className="text-2xl font-black text-teal-500 dark:text-teal-400">
            TailwindCSS
          </span>
        </div>
      </section>

      {/* CTA section */}
      <section
        className="mx-auto max-w-5xl px-4 animate-scale-in"
        style={{ animationDelay: "600ms" }}
      >
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary-900 px-8 py-16 shadow-2xl sm:px-16 sm:py-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-900 mix-blend-multiply" />
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to dive in?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-100">
              Stop configuring things manually. Start building features right
              away and join hundreds of productive developers.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                to="/users"
                className="btn-primary bg-white text-primary-900 hover:bg-surface-50"
              >
                Start Building Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
