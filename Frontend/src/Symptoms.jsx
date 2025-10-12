import axios from "axios";
import { useEffect, useState } from "react";

const Symptoms = () => {
    const [symptoms, setSymptoms] = useState([]);
    const [error, setError] = useState(null);

    //const API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFrc2hheXZpc2h3YWthcm1hNTQzMUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjExMzkxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMTA5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6IjEwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IkJhc2ljIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAyNC0wNy0xNSIsImlzcyI6Imh0dHBzOi8vYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTc1MjkxMzcyNiwibmJmIjoxNzUyOTA2NTI2fQ.aEy2ZrbacKymEtq5oMuuUurQnuCcBnYrgJOAZAXbmpQ"; 
    //const BASE_URL = "https://healthservice.priaid.ch";
    //const LANG = "en-gb";

    useEffect(() => {
        const fetchSymptoms = async () => {
            try {
                // 👇 Build the full query URL like in the Java version
//                const url = `${BASE_URL}/symptoms?token=${API_KEY}&language=${LANG}`;
                const url='http://localhost:3000/api/getdata';

                const response = await axios.get(url); // No need for params object
                setSymptoms(response.data);
            } catch (err) {
                console.error("API error:", err);
                setError("Failed to fetch symptoms: " + err.message);
            }
        };

        fetchSymptoms();
    }, []);

    return (
        <div>
            <h2>Symptoms</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {symptoms.map(symptom => (
                    <li key={symptom.id}>{symptom.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Symptoms;




// import axios from "axios";
// import { useEffect, useState } from "react";

// const Symptoms = () => {
//   const [symptoms, setSymptoms] = useState([]);
//   const [error, setError] = useState(null);
//   const [input, setInput] = useState("");
//   const [numbers, setNumbers] = useState([]);

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
//     if (/^[0-9, ]*$/.test(value)) {
//       setInput(value);
//       const nums = value
//         .split(",")
//         .map((n) => n.trim())
//         .filter((n) => n !== "");
//       setNumbers(nums);
//     }
//   };

//   const handleSearch = () => {
//     console.log("Searching for:", numbers);
//     alert(`Searching for: ${numbers.join(", ")}`);
//   };

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-900 py-10">
//       {/* 🟩 Upper Symptoms Card */}
//       <div className="w-[600px] bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700 mb-8">
//         <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
//           Symptoms
//         </h2>
//         {error && <p className="text-red-500">{error}</p>}
//         <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
//           {symptoms.map((symptom) => (
//             <li key={symptom.id}>{symptom.name}</li>
//           ))}
//         </ul>
//       </div>

//       {/* 🟦 Lower Input Card (replacing old left/center/right mini cards) */}
//       <div className="w-[500px] bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
//         <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
//           Enter Numbers (comma separated)
//         </h2>

//         <input
//           type="text"
//           value={input}
//           onChange={handleInputChange}
//           placeholder="e.g., 12, 45, 89"
//           className="w-full p-2 border rounded-lg border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
//         />

//         {numbers.length > 0 && (
//           <div className="flex flex-wrap gap-2 mt-4">
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
//           onClick={handleSearch}
//           className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//         >
//           Search
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Symptoms;
