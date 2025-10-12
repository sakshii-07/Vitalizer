// import React from 'react'

// export const Symptomss = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center pt-20 space-y-10">

//       {/* Scrollable Card */}
//       <div className="flex w-[1300px] h-[250px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden">
//         <div className="overflow-y-auto p-6 w-full">
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             The following is the list of symptoms and their ID's
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




// //without bg image
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export const Symptomss = () => {
//   const [symptoms, setSymptoms] = useState([]);
//   const [error, setError] = useState(null);

//   const [input, setInput] = useState("");
//   const [numbers, setNumbers] = useState([]);
//   const [inputError, setInputError] = useState("");

//   useEffect(() => {
//     const fetchSymptoms = async () => {
//       try {
//         const url = "http://localhost:3000/api/getdata";
//         const response = await axios.get(url);
//         setSymptoms(response.data);
//       } catch (err) {
//         console.error("API error:", err);
//         setError("Failed to fetch symptoms: " + err.message);
//       }
//     };
//     fetchSymptoms();
//   }, []);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     // Allow only digits, commas, and spaces
//     if (/^[0-9, ]*$/.test(value)) {
//       setInputError("");
//       setInput(value);
//       const nums = value
//         .split(",")
//         .map((n) => n.trim())
//         .filter((n) => n !== "");
//       setNumbers(nums);
//     } else {
//       setInputError("You're typing something that is not an ID!");
//     }
//   };

//   const handleCheckSymptoms = () => {
//     alert(`Checking symptoms for IDs: ${numbers.join(", ")}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center pt-20 space-y-10">

//       {/* 🟩 Scrollable Symptoms Card */}
//       <div className="flex w-[1300px] h-[250px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-sm overflow-hidden">
//         <div className="overflow-y-auto p-6 w-full">
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             The following is a list of symptoms and their IDs
//           </h5>
//           <div>
//             {error && <p className="text-red-500">{error}</p>}
//             <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
//               {symptoms.map((symptom) => (
//                 <li key={symptom.id}>{symptom.name}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* 🟦 Input Card (Replaces Left/Center/Right Grouped Card) */}
//       <div className="flex flex-col items-center w-[1000px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-8 space-y-4">
//         <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
//           Enter Symptom IDs (comma separated)
//         </h2>

//         <input
//           type="text"
//           value={input}
//           onChange={handleInputChange}
//           placeholder="e.g., 10, 23, 45"
//           className="w-[700px] p-3 border rounded-lg border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
//         />

//         {inputError && (
//           <p className="text-red-500 text-sm">{inputError}</p>
//         )}

//         {numbers.length > 0 && (
//           <div className="flex flex-wrap gap-2 mt-2 w-[700px]">
//             {numbers.map((num, index) => (
//               <span
//                 key={index}
//                 className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 rounded-full text-sm"
//               >
//                 {num}
//               </span>
//             ))}
//           </div>
//         )}

//         <button
//           onClick={handleCheckSymptoms}
//           className="mt-4 w-[700px] bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
//         >
//           Check Symptoms
//         </button>
//       </div>
//     </div>
//   );
// };


//with bg image
import React, { useEffect, useState } from "react";
import axios from "axios";

export const Symptomss = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [error, setError] = useState(null);

  const [input, setInput] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [inputError, setInputError] = useState("");

  useEffect(() => {
    const fetchSymptoms = async () => {
      try {
        const url = "http://localhost:3000/api/getdata";
        const response = await axios.get(url);
        setSymptoms(response.data);
      } catch (err) {
        console.error("API error:", err);
        setError("Failed to fetch symptoms: " + err.message);
      }
    };
    fetchSymptoms();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Allow only digits, commas, and spaces
    if (/^[0-9, ]*$/.test(value)) {
      setInputError("");
      setInput(value);
      const nums = value
        .split(",")
        .map((n) => n.trim())
        .filter((n) => n !== "");
      setNumbers(nums);
    } else {
      setInputError("You're typing something that is not a number!");
    }
  };

  const handleCheckSymptoms = () => {
    alert(`Checking symptoms for IDs: ${numbers.join(", ")}`);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center pt-20 space-y-10 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1584036561566-baf8f5f1b144')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/70"></div>

      {/* Main content on top of background */}
      <div className="relative z-10 flex flex-col items-center space-y-10 w-full">

        {/* 🟩 Scrollable Symptoms Card */}
        <div className="flex w-[1300px] h-[250px] bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-3xl shadow-sm overflow-hidden">
          <div className="overflow-y-auto p-6 w-full">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              The following is the list of symptoms and their IDs
            </h5>
            <div>
              {error && <p className="text-red-500">{error}</p>}
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                {symptoms.map((symptom) => (
                  <li key={symptom.id}>{symptom.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 🟦 Input Card (Replaces Left/Center/Right Grouped Card) */}
        <div className="flex flex-col items-center w-[1000px] bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-8 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Enter Symptom IDs (comma separated)
          </h2>

          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="e.g., 10, 23, 45"
            className="w-[700px] p-3 border rounded-lg border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />

          {inputError && (
            <p className="text-red-500 text-sm">{inputError}</p>
          )}

          {numbers.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2 w-[700px]">
              {numbers.map((num, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 rounded-full text-sm"
                >
                  {num}
                </span>
              ))}
            </div>
          )}

          <button
            onClick={handleCheckSymptoms}
            className="mt-4 w-[700px] bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Check Symptoms
          </button>
        </div>
      </div>
    </div>
  );
};
