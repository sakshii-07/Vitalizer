import React, { useEffect } from "react";

export const Contacts = () => {

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen relative pt-28 pb-20 px-4 bg-gradient-to-br from-blue-50 to-white [.dark_&]:from-gray-900 [.dark_&]:to-gray-800 overflow-hidden">

      {/* 🔵 Floating background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-5 w-72 h-72 bg-blue-300/40 [.dark_&]:bg-blue-800/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-5 w-96 h-96 bg-purple-300/40 [.dark_&]:bg-purple-700/30 rounded-full blur-3xl animate-ping"></div>
      </div>

      <h1 className="text-center text-5xl font-extrabold text-gray-900 [.dark_&]:text-white drop-shadow-lg">
        Contact <span className="text-blue-600 [.dark_&]:text-blue-400">Us</span>
      </h1>

      <p className="text-center mt-4 text-lg text-gray-700 [.dark_&]:text-gray-300 max-w-2xl mx-auto">
        Need help? Have questions? We’re here for you.  
        Reach out through the form or our social links!
      </p>

      {/* ===== MAIN CONTENT GRID ===== */}
      <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto mt-16">

        {/* ----- LEFT: Contact Info + Socials ----- */}
        <div className="space-y-6">

          {/* Info card */}
          <div className="p-6 rounded-2xl bg-white/60 [.dark_&]:bg-gray-800/60 backdrop-blur-md border border-white/30 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 [.dark_&]:text-white">
              Get in Touch
            </h2>
            <p className="text-gray-700 [.dark_&]:text-gray-300 mt-2">
              We usually respond within 24 hours!
            </p>

            <div className="mt-4 space-y-3 text-gray-800 [.dark_&]:text-gray-300">
              <p><i className="ri-mail-line text-blue-600 text-xl"></i> support@vitalizer.ai</p>
              <p><i className="ri-phone-line text-blue-600 text-xl"></i> +91 9876543210</p>
              <p><i className="ri-map-pin-line text-blue-600 text-xl"></i> Bangalore, India</p>
            </div>
          </div>

          {/* Socials Header */}
          <h3 className="text-xl font-semibold text-gray-900 [.dark_&]:text-white">
            Connect With Us
          </h3>

          {/* SOCIAL CARDS */}
          {[
            {
              icon: "ri-linkedin-box-fill",
              color: "text-blue-600",
              label: "LinkedIn",
              link: "https://linkedin.com"
            },
            {
              icon: "ri-github-fill",
              color: "text-gray-800 [.dark_&]:text-gray-300",
              label: "GitHub",
              link: "https://github.com"
            },
            {
              icon: "ri-instagram-fill",
              color: "text-pink-600",
              label: "Instagram",
              link: "https://instagram.com"
            },
          ].map((s, i) => (
            <a
              key={i}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 [.dark_&]:bg-gray-800/60 border border-white/30 [.dark_&]:border-gray-700 
              shadow-md backdrop-blur-md hover:scale-[1.03] hover:bg-white/70 transition"
            >
              <i className={`${s.icon} ${s.color} text-4xl`}></i>
              <span className="text-lg font-medium text-gray-900 [.dark_&]:text-white">
                {s.label}
              </span>
            </a>
          ))}
        </div>

        {/* ----- MIDDLE: CONTACT FORM ----- */}
        <div className="lg:col-span-2 p-8 rounded-2xl bg-white/70 [.dark_&]:bg-gray-800/70 backdrop-blur-lg border border-white/30 shadow-xl">

          <h2 className="text-2xl font-bold text-gray-900 [.dark_&]:text-white mb-6">
            Send Us a Message
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border border-gray-300 [.dark_&]:border-gray-700 bg-white/80 [.dark_&]:bg-gray-900/40 text-gray-900 [.dark_&]:text-white"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg border border-gray-300 [.dark_&]:border-gray-700 bg-white/80 [.dark_&]:bg-gray-900/40 text-gray-900 [.dark_&]:text-white"
            />

            <input
              type="text"
              placeholder="Subject"
              className="md:col-span-2 p-3 rounded-lg border border-gray-300 [.dark_&]:border-gray-700 bg-white/80 [.dark_&]:bg-gray-900/40 text-gray-900 [.dark_&]:text-white"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="md:col-span-2 p-3 rounded-lg border border-gray-300 [.dark_&]:border-gray-700 bg-white/80 [.dark_&]:bg-gray-900/40 text-gray-900 [.dark_&]:text-white"
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md text-lg font-medium active:scale-95 transition"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="max-w-5xl mx-auto mt-20 rounded-2xl overflow-hidden shadow-lg border border-white/30">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.940305243508!2d77.594562!3d12.971598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBangalore!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
          className="w-full h-[350px] border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
};
