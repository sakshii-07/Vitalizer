import React, { useEffect } from "react";

export const About = () => {
  useEffect(() => {
    // Load Remix Icons
    const link = document.createElement("link");
    link.href = "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div
      className="min-h-screen relative flex items-start justify-center py-16 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1584036561566-baf8f5f1b144')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 [.dark_&]:bg-black/70"></div>

      {/* MAIN CARD */}
      <div className="relative z-10 w-full max-w-3xl bg-white/70 [.dark_&]:bg-gray-800/60 border border-gray-200 [.dark_&]:border-gray-700 rounded-2xl shadow-lg p-10 backdrop-blur-md">

        {/* ⭐ PROFILE SECTION */}
        <div className="text-center">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sakshi"
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full shadow-lg border-4 border-white/60 [.dark_&]:border-gray-700"
          />

          <h1 className="mt-6 text-4xl font-extrabold text-black [.dark_&]:text-white">
            Sakshi Kumari
          </h1>

          <p className="mt-3 text-lg text-gray-700 [.dark_&]:text-gray-300">
            Full Stack Developer • AI Integrator • Innovator
          </p>

          <div className="flex justify-center gap-4 mt-4 text-2xl">
            <a
              href="https://github.com/your-username"
              target="_blank"
              className="text-gray-800 [.dark_&]:text-gray-200 hover:text-blue-600 transition"
            >
              <i className="ri-github-fill"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/your-username"
              target="_blank"
              className="text-gray-800 [.dark_&]:text-gray-200 hover:text-blue-600 transition"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a
              href="mailto:youremail@example.com"
              className="text-gray-800 [.dark_&]:text-gray-200 hover:text-blue-600 transition"
            >
              <i className="ri-mail-fill"></i>
            </a>
          </div>
        </div>

        {/* ⭐ ABOUT INTRO */}
        <div className="mt-10 text-center">
          <p className="text-lg text-gray-700 [.dark_&]:text-gray-300 leading-relaxed">
            I am passionate about building intelligent systems that bridge the gap between
            humans and technology. Vitalizer is one of my biggest projects — combining
            medical datasets, AI reasoning, and modern UI/UX design to help people understand
            their symptoms better.
          </p>
        </div>

        {/* ⭐ TECH STACK */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 [.dark_&]:text-white mb-4">
            Tech Stack & Tools
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Java + Spring Boot",
              "Python + Flask",
              "React + Tailwind",
              "MySQL",
              "API Medic",
              "Gemini API",
              "OAuth2",
              "Spring Security",
              "Ollama + Qwen2.5",
            ].map((tech, i) => (
              <div
                key={i}
                className="px-4 py-2 text-sm bg-gray-100 [.dark_&]:bg-gray-700 rounded-xl text-gray-900 [.dark_&]:text-gray-200 text-center shadow-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* ⭐ EXPERIENCE / TIMELINE */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 [.dark_&]:text-white mb-6">
            Experience & Journey
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 [.dark_&]:text-white">
                GHRCE college of Engineering
              </h3>
              <p className="text-gray-700 [.dark_&]:text-gray-300 text-sm">
                Worked on AI, embedded systems, and real-world software challenges.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 [.dark_&]:text-white">
                Full Stack AI Projects
              </h3>
              <p className="text-gray-700 [.dark_&]:text-gray-300 text-sm">
                Developed Vitalizer using React, Node, Flask, and medical datasets.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 [.dark_&]:text-white">
                Open-Source Contributions
              </h3>
              <p className="text-gray-700 [.dark_&]:text-gray-300 text-sm">
                Push improvements to GitHub projects involving AI, data tools, and UI.
              </p>
            </div>
          </div>
        </div>

        {/* ⭐ CTA BUTTON */}
        <div className="mt-14 text-center">
          <a
            href="/assistant"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg transition"
          >
            Explore Vitalizer →
          </a>
        </div>
      </div>
    </div>
  );
};
