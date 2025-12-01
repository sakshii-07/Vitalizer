import { useEffect, useState } from "react";
import {
  apiFetchSymptoms,
  apiFetchDiagnosis,
  apiFetchDiseaseDetails,
} from "./app";
import { DiseaseDetails } from "./components/assistant/DiseaseDetails";

export default function Symptoms() {
  const [symptoms, setSymptoms] = useState([]);
  const [symptomSearch, setSymptomSearch] = useState("");
  const [selectedSymptomIds, setSelectedSymptomIds] = useState([]);

  const [symptomLoading, setSymptomLoading] = useState(true);
  const [symptomError, setSymptomError] = useState(null);

  const [diagnosis, setDiagnosis] = useState(null);
  const [diagnosisLoading, setDiagnosisLoading] = useState(false);
  const [diagnosisError, setDiagnosisError] = useState(null);

  const [selectedDisease, setSelectedDisease] = useState(null);
  const [diseaseDetails, setDiseaseDetails] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);

  useEffect(() => {
    const fetchSymptoms = async () => {
      try {
        setSymptomLoading(true);
        const data = await apiFetchSymptoms();
        setSymptoms(data);
      } catch (err) {
        setSymptomError("Failed to fetch symptoms.");
      } finally {
        setSymptomLoading(false);
      }
    };

    fetchSymptoms();
  }, []);

  const filteredSymptoms = symptoms.filter((symptom) =>
    symptom.name.toLowerCase().includes(symptomSearch.toLowerCase())
  );

  const toggleSymptom = (id) => {
    setSelectedSymptomIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const clearSelection = () => {
    setSelectedSymptomIds([]);
    setDiagnosis(null);
    setSelectedDisease(null);
    setDiseaseDetails(null);
  };

  const handleDiagnose = async () => {
    if (!selectedSymptomIds.length) {
      alert("Please select symptoms");
      return;
    }

    try {
      setDiagnosisLoading(true);
      const data = await apiFetchDiagnosis(selectedSymptomIds);

      if (!data || !data.possible_diseases) {
        setDiagnosisError("Invalid response.");
        return;
      }

      setDiagnosis(data);
      setDiagnosisError(null);
    } catch (err) {
      setDiagnosisError("Could not fetch diagnosis.");
    } finally {
      setDiagnosisLoading(false);
    }
  };

  const handleDiseaseClick = async (disease) => {
    setSelectedDisease(disease);
    setDetailsLoading(true);
    setDiseaseDetails(null);

    try {
      const data = await apiFetchDiseaseDetails(disease);
      setDiseaseDetails(data);
    } catch (err) {
      console.log("Details error:", err);
    } finally {
      setDetailsLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-3">🩺 Medical Assistant</h1>
      <p className="text-gray-600 [.dark_&]:text-gray-300 mb-6">
        Select symptoms → Get diseases → Click to view details.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* ================= SYMPTOM SELECTION ================= */}
        <section className="bg-white [.dark_&]:bg-gray-800 rounded-xl shadow-lg p-5">
          <h2 className="text-2xl font-semibold mb-3">1️⃣ Select Symptoms</h2>

          <input
            type="text"
            placeholder="Search symptoms..."
            value={symptomSearch}
            onChange={(e) => setSymptomSearch(e.target.value)}
            className="w-full px-3 py-2 rounded-md border [.dark_&]:bg-gray-900"
          />

          <div className="flex flex-wrap gap-2 mt-4 max-h-60 overflow-y-auto p-2 border rounded-md">
            {filteredSymptoms.map((sym) => (
              <button
                key={sym.id}
                onClick={() => toggleSymptom(sym.id)}
                className={`px-3 py-1 rounded-full text-sm border transition
                  ${
                    selectedSymptomIds.includes(sym.id)
                      ? "bg-blue-600 text-white border-blue-700"
                      : "bg-gray-100 [.dark_&]:bg-gray-700 [.dark_&]:text-gray-200 hover:bg-gray-200"
                  }`}
              >
                {sym.name.replace(/_/g, " ")}
              </button>
            ))}
          </div>

          <div className="flex gap-3 mt-4">
            <button
              onClick={handleDiagnose}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
            >
              {diagnosisLoading ? "Analyzing..." : "Get Diagnosis"}
            </button>
            <button
              onClick={clearSelection}
              className="bg-gray-200 [.dark_&]:bg-gray-700 px-4 py-2 rounded-lg"
            >
              Clear
            </button>
          </div>
        </section>

        {/* ================= DIAGNOSIS RESULTS ================= */}
        <section className="bg-white [.dark_&]:bg-gray-800 rounded-xl shadow-lg p-5">
          <h2 className="text-2xl font-semibold mb-3">2️⃣ Results & Details</h2>

          {diagnosisError && (
            <p className="text-red-500 mb-2">{diagnosisError}</p>
          )}

          {!diagnosis && (
            <p className="text-gray-500 text-sm">Select symptoms to begin...</p>
          )}

          {diagnosis?.possible_diseases?.length > 0 && (
            <div className="space-y-3 max-h-60 overflow-y-auto mb-4">
              {diagnosis.possible_diseases.map((d) => (
                <div
                  key={d.disease}
                  onClick={() => handleDiseaseClick(d.disease)}
                  className={`p-3 rounded-lg border cursor-pointer transition ${
                    selectedDisease === d.disease
                      ? "border-blue-500 bg-blue-50 [.dark_&]:bg-blue-900"
                      : "hover:bg-gray-100 [.dark_&]:hover:bg-gray-700"
                  }`}
                >
                  <div className="font-bold">{d.disease}</div>
                  <div className="text-xs mt-1">
                    Match Score:{" "}
                    <span className="font-semibold">
                      {d.matched_symptom_count}/{d.total_symptoms}
                    </span>
                  </div>

                  {/* MATCH PROGRESS BAR */}
                  <div className="w-full bg-gray-300 h-2 rounded mt-1">
                    <div
                      className="bg-blue-600 h-2 rounded"
                      style={{
                        width: `${Math.round(d.match_ratio * 100)}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ================= DETAILS COMPONENT ================= */}
          <DiseaseDetails
            disease={selectedDisease}
            details={diseaseDetails}
            loading={detailsLoading}
          />
        </section>
      </div>
    </div>
  );
}
