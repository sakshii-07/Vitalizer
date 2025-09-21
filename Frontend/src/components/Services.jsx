import React from "react";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-900 pt-28 pb-12">
      {/* Four Picture Cards */}
      <div className="grid grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="flex items-center w-[420px] h-[200px] bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 overflow-hidden">
          <div className="flex flex-col justify-between p-4 w-2/3">
            <h4 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              AI Health at your Fingertips
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Quick answers powered by AI, designed to make healthcare easier.
            </p>
          </div>
          <img
            className="object-cover w-32 h-full rounded-r-lg"
            src="/asssss.webp"
            alt="AI Health Doctor"
          />
        </div>

        {/* Card 2 */}
        <div className="flex items-center w-[420px] h-[200px] bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 overflow-hidden">
          <div className="flex flex-col justify-between p-4 w-2/3">
            <h4 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Save Time, Stay Healthy
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Skip long queues and get reliable insights instantly.
            </p>
          </div>
          <img
            className="object-cover w-32 h-full rounded-r-lg"
            src="/3dpic2.webp"
            alt="AI Health Doctor"
          />
        </div>

        {/* Card 3 */}
        <div className="flex items-center w-[420px] h-[200px] bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 overflow-hidden">
          <div className="flex flex-col justify-between p-4 w-2/3">
            <h4 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Trusted AI Support
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Smart tools built to guide you but always consult doctors for serious concerns.
            </p>
          </div>
          <img
            className="object-cover w-32 h-full rounded-r-lg"
            src="/pl.webp"
            alt="AI Health Doctor"
          />
        </div>

        {/* Card 4 */}
        <div className="flex items-center w-[420px] h-[200px] bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 overflow-hidden">
          <div className="flex flex-col justify-between p-4 w-2/3">
            <h4 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Smarter Healthcare Journey
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Empowering you with knowledge to make informed health decisions.
            </p>
          </div>
          <img
            className="object-cover w-32 h-full rounded-r-lg"
            src="/3dc.webp"
            alt="AI Health Doctor"
          />
        </div>
      </div>

      {/* Button */}
      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <Link to={"symptomss"}>Go to Symptoms</Link>
      </button>
    </div>
  );
};
