import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const Services = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div
      className="min-h-screen relative flex flex-col items-center pt-28 pb-16 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1584036561566-baf8f5f1b144')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 [.dark_&]:bg-black/70"></div>

      <div className="relative z-10 w-full max-w-6xl text-center">

        {/* PAGE TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Our Premium Health Services
        </h1>

        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          Built with AI, medical datasets, and clean design — Vitalizer helps you stay informed & healthy.
        </p>

        {/* FEATURE CARDS GRID */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {/* Feature Card */}
          {[
            {
              title: "AI Health Insights",
              desc: "Get immediate, accurate predictions using dataset-driven AI.",
              img: "/asssss.webp",
              icon: "ri-stethoscope-line",
            },
            {
              title: "Save Time, Stay Healthy",
              desc: "No queues. No confusion. Instant clarity about your symptoms.",
              img: "/3dpic2.webp",
              icon: "ri-time-line",
            },
            {
              title: "Trusted AI Companion",
              desc: "Built to guide you responsibly — always consult a doctor when needed.",
              img: "/pl.webp",
              icon: "ri-shield-check-line",
            },
            {
              title: "End-to-End Health Journey",
              desc: "Symptoms → Diseases → Remedies → Ayurveda, all in one place.",
              img: "/3dc.webp",
              icon: "ri-heart-pulse-line",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="flex items-center h-[230px] bg-white/50 [.dark_&]:bg-gray-800/50 backdrop-blur-lg 
              border border-white/30 [.dark_&]:border-gray-700 rounded-2xl shadow-lg hover:shadow-xl 
              transition hover:scale-[1.02] overflow-hidden group"
            >
              {/* Text */}
              <div className="w-2/3 p-6">
                <i
                  className={`${card.icon} text-4xl text-blue-600 [.dark_&]:text-blue-400 mb-3`}
                ></i>
                <h3 className="text-xl font-bold text-gray-900 [.dark_&]:text-white">
                  {card.title}
                </h3>
                <p className="text-gray-700 [.dark_&]:text-gray-300 mt-2 text-sm">
                  {card.desc}
                </p>
              </div>

              {/* Image */}
              <img
                src={card.img}
                className="w-36 h-full object-cover rounded-r-2xl group-hover:scale-110 transition"
                alt="service"
              />
            </div>
          ))}
        </div>

        {/* SECOND FEATURES SECTION */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white mb-8 drop-shadow-lg">
            What Makes Vitalizer Different?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "ri-brain-line",
                title: "Deep Medical Knowledge",
                desc: "Merged datasets including symptoms, remedies, severity, descriptions, and Ayurveda.",
              },
              {
                icon: "ri-search-eye-line",
                title: "Precise Symptom Matching",
                desc: "Multi-symptom matching using ratios, severity scoring, and union logic.",
              },
              {
                icon: "ri-leaf-line",
                title: "Natural + Scientific Blend",
                desc: "Ayurveda + modern datasets to give well-rounded insight.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-white/50 [.dark_&]:bg-gray-800/50 backdrop-blur-lg border border-white/30 
                [.dark_&]:border-gray-700 rounded-xl p-6 shadow-md hover:scale-105 transition"
              >
                <i className={`${f.icon} text-4xl text-blue-600 [.dark_&]:text-blue-400`}></i>
                <h4 className="mt-4 text-xl font-semibold text-gray-900 [.dark_&]:text-white">
                  {f.title}
                </h4>
                <p className="mt-2 text-gray-700 [.dark_&]:text-gray-300 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BUTTON CTA */}
        <div className="mt-16">
          <Link
            to="/symptomss"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-xl shadow-xl transition"
          >
            Start Diagnosing →
          </Link>
        </div>
      </div>
    </div>
  );
};
