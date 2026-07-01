const About = () => {
  return (
    <div className="animate-fade-in mx-auto max-w-2xl space-y-8">
      <section className="card space-y-4">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 text-2xl shadow-lg">
          ℹ️
        </div>
        <h1 className="text-center text-2xl font-extrabold text-surface-900 dark:text-surface-100">
          About This App
        </h1>
        <p className="text-center leading-relaxed text-surface-500 dark:text-surface-400">
          A modern React application demonstrating state management, routing,
          data fetching, and UI design patterns. Built with the latest
          technologies and best practices.
        </p>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          {[
            { label: "Framework", value: "React 19" },
            { label: "Language", value: "TypeScript" },
            { label: "Styling", value: "Tailwind CSS" },
            { label: "Routing", value: "React Router v7" },
            { label: "State", value: "Zustand" },
            { label: "Data", value: "React Query" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl bg-surface-50 px-4 py-3 dark:bg-surface-800/50"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-surface-400 dark:text-surface-500">
                {item.label}
              </p>
              <p className="mt-0.5 text-sm font-semibold text-surface-700 dark:text-surface-300">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
