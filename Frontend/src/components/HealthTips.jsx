import React, { useState, useEffect } from "react";
import tipsData from "../data/healthTips.json";

export const HealthTips = () => {
  const categories = Object.keys(tipsData);
  const [activeCategory, setActiveCategory] = useState("general");
  const [tips, setTips] = useState([]);
  const [dailyTip, setDailyTip] = useState("");
  const [randomTipText, setRandomTipText] = useState("");

  useEffect(() => {
    setTips(tipsData[activeCategory]);
  }, [activeCategory]);

  useEffect(() => {
    const today = new Date().toDateString();
    const stored = localStorage.getItem("dailyTipDate");

    if (stored === today) {
      setDailyTip(localStorage.getItem("dailyTipText"));
    } else {
      const allTips = Object.values(tipsData).flat();
      const tip = allTips[Math.floor(Math.random() * allTips.length)];

      setDailyTip(tip);
      localStorage.setItem("dailyTipDate", today);
      localStorage.setItem("dailyTipText", tip);
    }
  }, []);

  const randomTip = () => {
    const list = tipsData[activeCategory];
    const tip = list[Math.floor(Math.random() * list.length)];
    setRandomTipText(tip);
  };

  return (
    <div className="relative min-h-screen px-6 pt-28 pb-16 max-w-3xl mx-auto">

      {/* 🔵 FLOATING GRADIENT BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/40 [.dark_&]:bg-blue-800/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/40 [.dark_&]:bg-purple-700/30 rounded-full blur-3xl animate-ping"></div>
      </div>

      {/* 🌞 DAILY TIP */}
      <div className="mb-10 p-6 rounded-2xl bg-white/50 [.dark_&]:bg-gray-800/40 shadow-xl backdrop-blur-xl border border-white/40 [.dark_&]:border-gray-700 animate-fadeIn">
        <h2 className="text-2xl font-bold text-gray-900 [.dark_&]:text-white mb-2">
          🌤️ Daily Health Tip
        </h2>
        <p className="text-gray-700 [.dark_&]:text-gray-300 text-md leading-relaxed">
          {dailyTip}
        </p>
      </div>

      {/* CATEGORY TABS */}
      <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
              ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-md scale-105"
                  : "bg-white/40 [.dark_&]:bg-gray-700/40 text-gray-900 [.dark_&]:text-gray-200 backdrop-blur-lg border border-gray-300/30 hover:scale-105"
              }
            `}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* TIPS LIST */}
      <div className="grid gap-4 animate-fadeIn">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="p-4 bg-white/60 [.dark_&]:bg-gray-800/50 rounded-xl shadow-sm border border-gray-300/30 [.dark_&]:border-gray-700/40 backdrop-blur-xl hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex gap-3">
              <span className="text-blue-600 [.dark_&]:text-blue-400 text-xl"></span>
              <p className="text-gray-800 [.dark_&]:text-gray-200 leading-relaxed">
                {tip}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* RANDOM TIP PANEL */}
      {randomTipText && (
        <div className="mt-8 p-5 bg-purple-100/70 [.dark_&]:bg-purple-900/40 backdrop-blur-xl border border-purple-300/30 [.dark_&]:border-purple-700/40 rounded-xl shadow-xl animate-fadeIn">
          <h3 className="text-lg font-semibold text-purple-800 [.dark_&]:text-purple-300 mb-2">
            🎯 Suggested Tip
          </h3>
          <p className="text-sm text-gray-800 [.dark_&]:text-gray-200">{randomTipText}</p>
        </div>
      )}

      {/* RANDOM TIP BUTTON */}
      <button
        onClick={randomTip}
        className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
      >
        Show Another Tip
      </button>
    </div>
  );
};
