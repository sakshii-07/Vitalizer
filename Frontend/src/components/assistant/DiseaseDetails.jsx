/* eslint-disable react/prop-types */
import { useState } from "react";

export function DiseaseDetails({ disease, details, loading, error }) {
    const [openSection, setOpenSection] = useState(null);

    if (!disease) {
        return (
            <p className="text-sm text-gray-500">
                Select a disease from the list to see detailed information.
            </p>
        );
    }

    if (loading) return <p>Loading details...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!details) return null;

    // Labels for extra fields
    const labels = {
        hindi_name: "Hindi Name",
        marathi_name: "Marathi Name",
        age_group: "Age Group",
        gender: "Gender",
        prognosis: "Prognosis",
        risk_factors: "Risk Factors",
        diagnosis_and_tests: "Tests & Diagnosis",
        dietary_habits: "Dietary Habits",
        environmental_factors: "Environmental Factors",
        stress_levels: "Stress Levels",
        physical_activity_levels: "Physical Activity Levels",
        ayurvedic_herbs: "Ayurvedic Herbs",
        doshas: "Associated Doshas",
        prevention: "Prevention",
        complications: "Complications",
        patient_recommendations: "Doctor Recommendations",
    };

    const accordionFields = [
        "diagnosis_and_tests",
        "diet_and_lifestyle_recommendations",
        "risk_factors",
        "environmental_factors",
        "prognosis",
        "complications",
        "prevention",
        "patient_recommendations",
    ];

    const toggle = (key) =>
        setOpenSection((prev) => (prev === key ? null : key));

    return (
        <div className="mt-6">
            {/* ----- IMAGE BANNER ----- */}
            {/* ----- IMAGE BANNER (Guaranteed Loading) ----- */}
            {disease && (
                <div className="mb-4">
                    <img
                        src={`https://picsum.photos/seed/${encodeURIComponent(
                            disease
                        )}/800/300`}
                        alt={disease}
                        className="w-full h-48 md:h-56 object-cover rounded-xl shadow-md"
                    />
                </div>
            )}



            {/* ----- HEADER ----- */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-5 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold">{details.disease}</h2>
                <p className="text-sm mt-1 opacity-90">
                    A comprehensive medical overview including symptoms, remedies, tests,
                    and risk analysis.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                    {details.hindi_name && (
                        <span className="px-3 py-1 bg-black/20 rounded-full text-xs">
                            {details.hindi_name}
                        </span>
                    )}
                    {details.marathi_name && (
                        <span className="px-3 py-1 bg-black/20 rounded-full text-xs">
                            {details.marathi_name}
                        </span>
                    )}
                    {details.age_group && (
                        <span className="px-3 py-1 bg-black/20 rounded-full text-xs">
                            Age: {details.age_group}
                        </span>
                    )}
                </div>
            </div>

            {/* ----- DESCRIPTION ----- */}
            <div className="mt-5 bg-white [.dark_&]:bg-gray-900 p-4 rounded-xl shadow border">
                <h3 className="text-lg font-semibold mb-2">📝 Description</h3>
                <p className="text-sm leading-relaxed text-gray-700 [.dark_&]:text-gray-200">
                    {details.description}
                </p>
            </div>

            {/* ----- PRECAUTIONS ----- */}
            {details.precautions?.length > 0 && (
                <div className="mt-5 bg-white [.dark_&]:bg-gray-900 p-4 rounded-xl shadow border">
                    <h3 className="text-lg font-semibold mb-3">⚠️ Precautions</h3>
                    <div className="flex flex-wrap gap-2">
                        {details.precautions.map((p, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-yellow-100 [.dark_&]:bg-yellow-800 text-yellow-900 [.dark_&]:text-yellow-200 rounded-full text-xs"
                            >
                                {p}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* ----- HOME REMEDIES ----- */}
            {details.home_remedies?.length > 0 && (
                <div className="mt-5">
                    <h3 className="text-lg font-semibold mb-3">
                        🌿 Home Remedies & Yoga
                    </h3>

                    <div className="grid md:grid-cols-2 gap-3">
                        {details.home_remedies.map((r, i) => (
                            <div
                                key={i}
                                className="bg-white [.dark_&]:bg-gray-900 p-4 rounded-xl shadow border"
                            >
                                <h4 className="font-semibold text-blue-600 [.dark_&]:text-blue-300">
                                    {r.item}
                                </h4>

                                {r.remedy && (
                                    <p className="text-sm mt-1">
                                        <span className="font-medium">Remedy: </span>
                                        {r.remedy}
                                    </p>
                                )}

                                {r.yogasan && (
                                    <p className="text-sm mt-1">
                                        <span className="font-medium">Yogasan: </span>
                                        {r.yogasan}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* ----- ICON GRID (Small Summary Cards) ----- */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {details.prognosis && (
                    <div className="bg-white [.dark_&]:bg-gray-900 p-4 rounded-xl shadow border">
                        <h4 className="font-semibold text-sm mb-1">📊 Prognosis</h4>
                        <p className="text-xs">{details.prognosis}</p>
                    </div>
                )}
                {details.risk_factors && (
                    <div className="bg-white [.dark_&]:bg-gray-900 p-4 rounded-xl shadow border">
                        <h4 className="font-semibold text-sm mb-1">⚡ Risk Factors</h4>
                        <p className="text-xs whitespace-pre-line">
                            {details.risk_factors}
                        </p>
                    </div>
                )}
                {details.doshas && (
                    <div className="bg-white [.dark_&]:bg-gray-900 p-4 rounded-xl shadow border">
                        <h4 className="font-semibold text-sm mb-1">
                            🧘 Ayurvedic Doshas
                        </h4>
                        <p className="text-xs">{details.doshas}</p>
                    </div>
                )}
            </div>

            {/* ----- ACCORDION SECTIONS (Long text fields) ----- */}
            <div className="mt-6 space-y-3">
                {accordionFields.map((key) => {
                    if (!details[key]) return null;

                    return (
                        <div
                            key={key}
                            className="bg-white [.dark_&]:bg-gray-900 p-3 rounded-xl shadow border"
                        >
                            <button
                                onClick={() => toggle(key)}
                                className="w-full text-left font-semibold text-sm flex justify-between items-center"
                            >
                                {labels[key] || key}
                                <span>{openSection === key ? "▲" : "▼"}</span>
                            </button>

                            {openSection === key && (
                                <div className="mt-2 text-xs text-gray-700 [.dark_&]:text-gray-300 whitespace-pre-line">
                                    {details[key]}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
