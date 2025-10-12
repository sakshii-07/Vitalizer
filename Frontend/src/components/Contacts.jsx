import React from "react";

export const Contacts = () => {
  return (
    <div
      className="flex flex-col items-center min-h-screen pt-24 space-y-6 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1584036561566-baf8f5f1b144')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full space-y-6">

        {/* Contact Us Heading Card */}
        <div className="w-full max-w-md bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-6 text-center backdrop-blur-md">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Reach out through any platform below
          </p>
        </div>

        {/* LinkedIn Card */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="w-full max-w-md bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-6 flex items-center space-x-4 hover:bg-white/70 dark:hover:bg-gray-800/70 transition backdrop-blur-md"
        >
          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.98h5V24H0V8.98zm7.98 0H13v2.1c.72-1.35 2.54-2.58 5.23-2.58C22.42 8.5 24 11.02 24 15.3V24h-5v-8c0-2.02-.73-3.4-2.57-3.4-1.4 0-2.24.94-2.61 1.85-.14.33-.17.78-.17 1.24V24H7.98V8.98z" />
          </svg>
          <span className="text-lg font-medium text-gray-900 dark:text-white">LinkedIn</span>
        </a>

        {/* GitHub Card */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="w-full max-w-md bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-6 flex items-center space-x-4 hover:bg-white/70 dark:hover:bg-gray-800/70 transition backdrop-blur-md"
        >
          <svg className="w-8 h-8 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.4 7.86 10.94.58.1.79-.25.79-.56v-2.1c-3.2.7-3.87-1.54-3.87-1.54-.52-1.3-1.27-1.65-1.27-1.65-1.04-.72.08-.71.08-.71 1.15.08 1.76 1.2 1.76 1.2 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.27-5.23-5.65 0-1.25.44-2.28 1.17-3.09-.12-.29-.51-1.45.11-3.01 0 0 .96-.31 3.14 1.18a10.94 10.94 0 0 1 5.72 0c2.18-1.49 3.14-1.18 3.14-1.18.62 1.56.23 2.72.11 3.01.73.81 1.17 1.84 1.17 3.09 0 4.39-2.69 5.36-5.25 5.64.41.36.78 1.08.78 2.18v3.24c0 .31.21.66.79.55A10.98 10.98 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
          </svg>
          <span className="text-lg font-medium text-gray-900 dark:text-white">GitHub</span>
        </a>

        {/* Instagram Card */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="w-full max-w-md bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-6 flex items-center space-x-4 hover:bg-white/70 dark:hover:bg-gray-800/70 transition backdrop-blur-md"
        >
          <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15a3.5 3.5 0 0 0 0-7Zm5.5-.88a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0Z" />
          </svg>
          <span className="text-lg font-medium text-gray-900 dark:text-white">Instagram</span>
        </a>

      </div>
    </div>
  );
};
