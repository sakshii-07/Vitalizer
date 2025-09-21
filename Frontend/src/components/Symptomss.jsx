// import React from 'react'

// export const Symptomss = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center pt-20 space-y-10">

//       {/* Scrollable Card */}
//       <div className="flex w-[1300px] h-[250px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden">
//         <div className="overflow-y-auto p-6 w-full">
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             Noteworthy technology acquisitions 2021
//           </h5>
//           <p className="font-normal text-gray-700 dark:text-gray-400">
//             Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. <br /><br />
//             🔸 Acquisition 1: Company A bought Company B for $20B.<br />
//             🔸 Acquisition 2: Company X merged with Company Y for $15B.<br />
//             🔸 Acquisition 3: Company M took over Company N for $10B.<br />
//             🔸 Acquisition 4: Company Z acquired Company Q for $5B.<br /><br />
//             This is extra content to make the container scrollable. Keep adding more if you want to test the scroll further.
//           </p>
//         </div>
//       </div>

//       {/* Input Boxes Row */}
//       <div className="flex justify-between w-[1300px] px-10">
//         <input
//           type="text"
//           className="w-[250px] h-[60px] px-2 py-1 border border-gray-400 rounded-md text-sm"
//           placeholder="Left"
//         />
//         <input
//           type="text"
//           className="w-[250px] h-[60px] px-2 py-1 border border-gray-400 rounded-md text-sm"
//           placeholder="Center"
//         />
//         <input
//           type="text"
//           className="w-[250px] h-[60px] px-2 py-1 border border-gray-400 rounded-md text-sm"
//           placeholder="Right"
//         />
//       </div>

//     </div>
//   )
// }
import React from 'react'

export const Symptomss = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center pt-20 space-y-10">

      {/* Scrollable Card */}
      {/* Scrollable Card */}
<div className="flex w-[1300px] h-[250px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-sm overflow-hidden">

        <div className="overflow-y-auto p-6 w-full">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. <br /><br />
            🔸 Acquisition 1: Company A bought Company B for $20B.<br />
            🔸 Acquisition 2: Company X merged with Company Y for $15B.<br />
            🔸 Acquisition 3: Company M took over Company N for $10B.<br />
            🔸 Acquisition 4: Company Z acquired Company Q for $5B.<br /><br />
            This is extra content to make the container scrollable. Keep adding more if you want to test the scroll further.
          </p>
        </div>
      </div>

      {/* Group Card Container */}
      <div className="flex flex-col items-center space-y-6 w-[1300px] px-10 py-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">

        {/* Input Boxes Styled Like Cards */}
        <div className="flex justify-between w-full">
          {["Left", "Center", "Right"].map((label, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center w-[360px] h-[80px] bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-sm text-sm text-gray-900 dark:text-white"
            >
              {label}
            </div>
          ))}
        </div>

        {/* Button Below Cards */}
        <button
          className="w-[1100px] h-[90px] bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-sm text-sm text-gray-900 dark:text-white"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

