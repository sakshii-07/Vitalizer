from flask import Flask, jsonify, request
import pandas as pd

app = Flask(__name__)

# === 1️⃣ Load datasets ===
df_disease = pd.read_csv("data/dataset.csv")
df_description = pd.read_csv("data/symptom_description.csv")
df_precaution = pd.read_csv("data/symptom_precaution.csv")
df_severity = pd.read_csv("data/Symptom-severity.csv")

# === 2️⃣ Preprocess symptoms ===
# Extract all unique symptom names
symptom_cols = [col for col in df_disease.columns if col.startswith("Symptom")]
all_symptoms = sorted({
    str(sym).strip().lower().replace(" ", "_")
    for col in symptom_cols
    for sym in df_disease[col].dropna()
    if str(sym).strip() != ""
})

# Map symptoms to IDs and back
symptom_id_map = {i + 1: s for i, s in enumerate(all_symptoms)}
symptom_name_map = {v: k for k, v in symptom_id_map.items()}

# === 3️⃣ Disease dictionary ===
disease_map = {}
for _, row in df_disease.iterrows():
    disease = str(row["Disease"]).strip()
    symptoms = {
        str(sym).strip().lower().replace(" ", "_")
        for sym in row[1:].dropna()
        if str(sym).strip() != ""
    }
    if disease not in disease_map:
        disease_map[disease] = set()
    disease_map[disease].update(symptoms)

# === 4️⃣ Add description & precautions ===
description_map = {
    row["Disease"].strip(): str(row["Description"]).strip()
    for _, row in df_description.iterrows()
}

precaution_map = {
    row["Disease"].strip(): [
        str(p).strip()
        for p in row[1:].dropna()
        if str(p).strip() != ""
    ]
    for _, row in df_precaution.iterrows()
}

# === 5️⃣ Severity lookup ===
severity_map = {
    str(row["Symptom"]).strip().lower().replace(" ", "_"): int(row["weight"])
    for _, row in df_severity.iterrows()
}


# === 🧠 API Routes ===

@app.route("/symptoms", methods=["GET"])
def get_symptoms():
    """Return all symptoms with IDs"""
    return jsonify([
        {"id": sid, "name": name} for sid, name in symptom_id_map.items()
    ])


@app.route("/diagnosis", methods=["GET"])
def get_diagnosis():
    """
    Accepts: ?id=1&id=2...
    Returns: diseases matching at least one symptom,
             ranked by how many symptoms matched.
    """
    ids = request.args.getlist("id", type=int)
    if not ids:
        return jsonify({"error": "Please provide one or more symptom IDs"}), 400

    selected_symptoms = [symptom_id_map[i] for i in ids if i in symptom_id_map]
    if not selected_symptoms:
        return jsonify({"error": "Invalid symptom IDs"}), 400

    matched = []
    for disease, symptoms in disease_map.items():
        # Count how many input symptoms match
        matched_count = len(set(selected_symptoms) & symptoms)
        if matched_count > 0:
            total = len(symptoms)
            ratio = matched_count / total
            severity_score = sum(severity_map.get(s, 1) for s in selected_symptoms if s in symptoms)
            matched.append({
                "disease": disease,
                "matched_symptom_count": matched_count,
                "total_symptoms": total,
                "match_ratio": round(ratio, 2),
                "severity_score": severity_score
            })

    if not matched:
        return jsonify({
            "input_symptoms": selected_symptoms,
            "possible_diseases": [],
            "message": "No matching disease found"
        })

    # Sort by how strong the match is
    matched.sort(key=lambda x: (x["matched_symptom_count"], x["match_ratio"]), reverse=True)

    return jsonify({
        "input_symptoms": selected_symptoms,
        "possible_diseases": matched
    })



@app.route("/details/<disease>", methods=["GET"])
def get_disease_details(disease):
    """Return description and precautions for a given disease"""
    disease = disease.strip()
    description = description_map.get(disease, "No description available.")
    precautions = precaution_map.get(disease, [])
    return jsonify({
        "disease": disease,
        "description": description,
        "precautions": precautions
    })


@app.route("/")
def home():
    return jsonify({
        "message": "Welcome to Local Medical API!",
        "routes": {
            "/symptoms": "List all symptoms with IDs",
            "/diagnosis?id=1&id=2": "Get possible diseases",
            "/details/<disease>": "Get disease details and precautions"
        }
    })


if __name__ == "__main__":
    app.run(debug=True)
