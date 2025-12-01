// src/api.js
import axios from "axios";

const API_BASE = "http://localhost:3000"; // Node backend (proxy to Flask)

// 🔹 Get all symptoms
export async function apiFetchSymptoms() {
    const url = `${API_BASE}/symptoms`;
    const res = await axios.get(url);
    return res.data;
}

// 🔹 Get diagnosis (multiple symptom IDs)
export async function apiFetchDiagnosis(symptomIds) {
  const url = `${API_BASE}/diagnosis`;

  const res = await axios.get(url, {
    params: { id: symptomIds },
    paramsSerializer: (params) => {
      const search = new URLSearchParams();
      params.id.forEach((v) => search.append("id", v));
      return search.toString();
    },
  });

  return res.data;
}


// 🔹 Get detailed info for a specific disease
export async function apiFetchDiseaseDetails(diseaseName) {
    const encoded = encodeURIComponent(diseaseName);
    const url = `${API_BASE}/details/${encoded}`;
    const res = await axios.get(url);
    return res.data;
}
