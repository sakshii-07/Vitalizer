import React, { useEffect } from "react";

export const Mainhomepage = () => {
  // Load Remix Icons
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white [.dark_&]:from-gray-900 [.dark_&]:to-gray-800 overflow-hidden">

      {/* 🔵 Floating Gradient Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-300/40 [.dark_&]:bg-blue-700/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/40 [.dark_&]:bg-purple-700/30 rounded-full blur-3xl animate-ping"></div>
      </div>

      {/* HERO SECTION */}
      <section className="pt-28 pb-20 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 [.dark_&]:text-white leading-snug drop-shadow-lg">
          Your AI-Powered
          <span className="text-blue-600 [.dark_&]:text-blue-400"> Health Companion</span>
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-gray-700 [.dark_&]:text-gray-300">
          Diagnose symptoms instantly, explore diseases, and access home remedies
          powered by advanced AI + medical datasets.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/assistant"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg transition"
          >
            Start Diagnosis
          </a>
          <a
            href="/about"
            className="px-8 py-3 border border-gray-400 [.dark_&]:border-gray-600 text-gray-800 [.dark_&]:text-gray-200 hover:bg-gray-100 [.dark_&]:hover:bg-gray-700 rounded-xl transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* PRODUCT IMAGE PANEL */}
      <section className="flex justify-center mb-20 px-4">
        <div className="max-w-4xl w-full bg-white/60 [.dark_&]:bg-gray-800/50 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden border border-gray-200 [.dark_&]:border-gray-700 flex flex-col md:flex-row">

          <div className="p-8 flex flex-col justify-between w-full md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 [.dark_&]:text-white mb-3">
              Smarter Health Decisions, Faster.
            </h2>
            <p className="text-gray-600 [.dark_&]:text-gray-300 mb-4 text-lg">
              Vitalizer analyzes your symptoms across multiple datasets to give you
              accurate, actionable health insights.
            </p>

            <p className="text-sm text-gray-500 [.dark_&]:text-gray-400">
              Backed by real medical knowledge: symptom datasets, precautions,
              Ayurvedic remedies, home treatments, and more.
            </p>
          </div>

          <img
            className="object-cover w-full md:w-80 h-64 md:h-auto"
            src="/vitdoc.webp"
            alt="AI Health Doctor"
          />
        </div>
      </section>

      {/* ⭐ STATS SECTION */}
      <section className="mb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "25K+", label: "Users Helped" },
            { value: "780+", label: "Diseases Covered" },
            { value: "1200+", label: "Home Remedies" },
            { value: "92%", label: "Prediction Accuracy" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white/70 [.dark_&]:bg-gray-800/60 backdrop-blur-lg shadow-lg rounded-xl border border-gray-200 [.dark_&]:border-gray-700 hover:scale-105 transition"
            >
              <h3 className="text-3xl font-bold text-blue-600 [.dark_&]:text-blue-400">{item.value}</h3>
              <p className="text-gray-700 [.dark_&]:text-gray-300 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ HOW IT WORKS */}
      <section className="mb-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 [.dark_&]:text-white">
          How It <span className="text-blue-600 [.dark_&]:text-blue-400">Works</span>
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              icon: "ri-search-eye-line",
              title: "1. Select Symptoms",
              text: "Choose symptoms from the smart searchable list.",
            },
            {
              icon: "ri-robot-line",
              title: "2. AI Diagnosis",
              text: "Our engine analyzes symptoms using medical datasets.",
            },
            {
              icon: "ri-file-list-3-line",
              title: "3. View Detailed Results",
              text: "Get symptoms, risks, remedies, tests, and precautions.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="p-6 bg-white [.dark_&]:bg-gray-800 rounded-xl shadow-lg border border-gray-200 [.dark_&]:border-gray-700 hover:scale-[1.03] transition"
            >
              <i className={`${step.icon} text-5xl text-blue-600 [.dark_&]:text-blue-400`}></i>
              <h3 className="mt-4 text-xl font-semibold text-gray-900 [.dark_&]:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600 [.dark_&]:text-gray-300">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ FEATURES SECTION (existing kept as is) */}
      {/* [Your existing features code stays unchanged here] */}

      {/* ⭐ PRICING SECTION */}
      <section className="mb-24 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 [.dark_&]:text-white mb-12">
          Simple & Transparent <span className="text-blue-600">Pricing</span>
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {/* FREE PLAN */}
          <div className="p-8 bg-white [.dark_&]:bg-gray-800 border border-gray-200 [.dark_&]:border-gray-700 shadow-xl rounded-2xl hover:scale-[1.02] transition">
            <h3 className="text-2xl font-bold text-gray-900 [.dark_&]:text-white">Free</h3>
            <p className="text-gray-500 [.dark_&]:text-gray-300 mt-2">For everyone</p>
            <h2 className="text-4xl font-bold mt-4">₹0</h2>

            <ul className="mt-6 space-y-2 text-gray-700 [.dark_&]:text-gray-300">
              <li>✓ Unlimited symptom checks</li>
              <li>✓ Basic disease info</li>
              <li>✓ Home remedies preview</li>
            </ul>

            <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl shadow transition">
              Start Free
            </button>
          </div>

          {/* PREMIUM PLAN */}
          <div className="p-8 bg-blue-600 text-white border border-blue-400 shadow-xl rounded-2xl hover:scale-[1.02] transition">
            <h3 className="text-2xl font-bold">Premium</h3>
            <p className="text-blue-100 mt-2">For serious health tracking</p>
            <h2 className="text-4xl font-bold mt-4">₹199/month</h2>

            <ul className="mt-6 space-y-2 text-blue-50">
              <li>✓ Full disease breakdown</li>
              <li>✓ Ayurveda + Yoga recommendations</li>
              <li>✓ Risk factors + complications</li>
              <li>✓ Priority AI model</li>
            </ul>

            <button className="mt-6 w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-xl shadow transition">
              Upgrade Now
            </button>
          </div>
        </div>
      </section>

      {/* ⭐ FAQ SECTION */}
      <section className="mb-24 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 [.dark_&]:text-white mb-10">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {[
            {
              q: "Is it safe to use Vitalizer?",
              a: "Yes. All predictions are based on verified medical datasets."
            },
            {
              q: "Can it replace a doctor?",
              a: "No. Vitalizer helps with early assessment but not a medical diagnosis."
            },
            {
              q: "Is my data stored?",
              a: "No personal data or symptom data is stored."
            },
          ].map((f, i) => (
            <details
              key={i}
              className="bg-white [.dark_&]:bg-gray-800 border border-gray-200 [.dark_&]:border-gray-700 rounded-xl p-4 cursor-pointer"
            >
              <summary className="font-semibold text-gray-900 [.dark_&]:text-white">
                {f.q}
              </summary>
              <p className="text-gray-700 [.dark_&]:text-gray-300 mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ⭐ FINAL CTA */}
      <section className="py-16 text-center bg-blue-600 text-white rounded-t-3xl shadow-inner">
        <h2 className="text-4xl font-bold">Start Your Health Journey Today</h2>
        <p className="mt-3 text-blue-100">Your body deserves better answers.</p>

        <a
          href="/assistant"
          className="mt-6 inline-block px-10 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow hover:bg-blue-100 transition"
        >
          Launch Vitalizer →
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-700 [.dark_&]:text-gray-300 text-sm">
        © {new Date().getFullYear()} Vitalizer — Your Health, Simplified.
      </footer>
    </div>
  );
};
