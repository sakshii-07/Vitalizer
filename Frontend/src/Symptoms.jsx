import axios from "axios";
import { useEffect, useState } from "react";

const Symptoms = () => {
    const [symptoms, setSymptoms] = useState([]);
    const [error, setError] = useState(null);

    const API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFrc2hheXZpc2h3YWthcm1hNTQzMUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjExMzkxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMTA5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6IjEwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IkJhc2ljIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAyNC0wNy0xNSIsImlzcyI6Imh0dHBzOi8vYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTc1MjkxMzcyNiwibmJmIjoxNzUyOTA2NTI2fQ.aEy2ZrbacKymEtq5oMuuUurQnuCcBnYrgJOAZAXbmpQ"; 
    const BASE_URL = "https://healthservice.priaid.ch";
    const LANG = "en-gb";

    useEffect(() => {
        const fetchSymptoms = async () => {
            try {
                // 👇 Build the full query URL like in the Java version
                const url = `${BASE_URL}/symptoms?token=${API_KEY}&language=${LANG}`;

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
                    <li key={symptom.ID}>{symptom.Name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Symptoms;