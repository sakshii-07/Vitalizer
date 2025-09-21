import React from "react";

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-start justify-center py-16 px-4">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm p-8">
        {/* Top: About Me (center) */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black dark:text-white">About Me</h1>

          <p className="mt-4 text-lg text-gray-800 dark:text-gray-200">
            Hi <span role="img" aria-label="waving hand">👋</span>, I'm{" "}
            <span className="font-bold">Sakshi Kumari</span>
          </p>

          <h4 className="mt-2 text-base text-gray-700 dark:text-gray-300">
            I'm a passionate developer with a love for building robust applications and solving complex problems
          </h4>

          <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
            Connect with me on:&nbsp;
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
              className="underline hover:no-underline"
            >
              Github
            </a>
            &nbsp;|&nbsp;
            <a
              href="https://www.linkedin.com/in/your-username"
              target="_blank"
              rel="noreferrer"
              className="underline hover:no-underline"
            >
              Linkedin
            </a>
          </p>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            If you like my work, please give a star on Github!
          </p>
        </div>

        {/* Tech Stack (left aligned) */}
        <div className="mt-10">
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">Tech Stack</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            The application leverages a combination of APIs and technologies to provide a comprehensive experience
          </p>

          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><span className="font-semibold">Gemini API</span> for personalized tips and chatbot feedback</li>
            <li><span className="font-semibold">API Medic</span> for medical data and symptom analysis</li>
            <li><span className="font-semibold">Concurrent HashMap</span> for cache optimisation</li>
            <li><span className="font-semibold">MySQL</span> database for reliable data storage</li>
            <li><span className="font-semibold">OAuth2</span> for Google login authentication</li>
            <li><span className="font-semibold">Spring AI</span> – Ollama qwen2.5 custom Modelfile LLM chatbot for sentiment analysis</li>
            <li><span className="font-semibold">Spring Security</span> for secure authentication</li>
            <li><span className="font-semibold">Spring Boot</span> as the backend framework</li>
            <li><span className="font-semibold">HTML</span>, <span className="font-semibold">Tailwind CSS</span>, <span className="font-semibold">Flowbite component Library</span>, and <span className="font-semibold">React</span> for the frontend</li>
          </ul>
        </div>

        {/* Responsive Design (center) */}
        <div className="mt-10 text-center">
          <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">Responsive Design</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            This website is designed to be fully responsive, ensuring a smooth user experience on any device.
          </p>

          <button
            type="button"
            className="mt-6 inline-flex items-center justify-center px-6 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition"
          >
            HOME
          </button>
        </div>
      </div>
    </div>
  );
};
