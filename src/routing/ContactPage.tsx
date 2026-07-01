import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in mx-auto max-w-lg">
      <div className="card space-y-6">
        <div>
          <h2 className="text-surface-900 dark:text-surface-100">Contact Us</h2>
          <p className="text-sm text-surface-500 dark:text-surface-400">
            Send us a message and we'll get back to you.
          </p>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            navigate("/");
          }}
          className="space-y-4"
        >
          <div>
            <label className="mb-1 block text-sm font-medium text-surface-700 dark:text-surface-300">
              Name
            </label>
            <input type="text" className="input" placeholder="Your name" />
          </div>
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
              Message
            </label>
            <textarea
              className="input min-h-[100px] resize-y"
              placeholder="Your message..."
              rows={4}
            />
          </div>
          <button type="submit" className="btn-primary w-full">
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
