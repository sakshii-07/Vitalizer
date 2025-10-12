import React from "react";

export const Mainhomepage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage:
          "url('C:\Users\HP\Desktop\Vitalizer\Frontend\public\download (4).jpg')",
      }}
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Welcome Card */}
        <div className="w-[400px] p-6 mb-6 bg-white/60 border border-gray-200 rounded-lg shadow-md backdrop-blur-md text-center dark:bg-gray-800/60 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Welcome to Vitalizer
          </h5>
          <p className="mb-2 text-lg text-gray-600 dark:text-gray-300">
            Your personalized AI-powered health companion
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Find answers to your health concerns quickly and accurately.
          </p>
        </div>

        {/* Picture Card */}
        <div className="flex items-center w-[750px] h-[260px] bg-white/60 border border-gray-200 rounded-lg shadow-sm overflow-hidden backdrop-blur-md dark:border-gray-700 dark:bg-gray-800/60">
          <div className="flex flex-col justify-between p-4 w-2/3">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              AI Powered Health Companion at your Fingertips
            </h2>
            <p className="mb-2 text-lg font-medium text-gray-500 dark:text-gray-400">
              We are committed to helping you live a healthier life and lessen
              the time you spend in clinic queues.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AI-powered tools help you find answers to your health concerns
              quickly and accurately, but we still recommend consulting a
              healthcare professional for serious conditions.
            </p>
          </div>
          <img
            className="object-cover w-36 h-full rounded-r-lg"
            src="vitdoc.webp"
            alt="AI Health Doctor"
          />
        </div>
      </div>
    </div>
  );
};
