from flask import Flask, jsonify, request
import pandas as pd

app = Flask(__name__)

# === 1️⃣ Load datasets ===
df_disease = pd.read_csv("data/dataset.csv")
df_description = pd.read_csv("data/symptom_description.csv")
df_precaution = pd.read_csv("data/symptom_precaution.csv")
df_severity = pd.read_csv("data/Symptom-severity.csv")
df_home_remedy = pd.read_csv("data/home_remedy.csv")

# NEW: load gen1 + gen2 and merge
df_gen1 = pd.read_csv("data/gen1.csv")
df_gen2 = pd.read_excel("data/gen2.xlsx")

df_gen_merged = pd.concat([df_gen1, df_gen2], ignore_index=True)

# Drop duplicate diseases (keep first occurrence)
if "Disease" in df_gen_merged.columns:
    df_gen_merged = df_gen_merged.drop_duplicates(subset=["Disease"])
else:
    raise ValueError("Expected 'Disease' column in gen1/gen2 CSV files")


# === helper: normalize column names to snake_case keys ===
def normalize_key(col: str) -> str:
    return (
        col.strip()
        .lower()
        .replace("&", "and")
        .replace("(", "")
        .replace(")", "")
        .replace("/", "_")
        .replace(" ", "_")
    )


# === 2️⃣ Preprocess symptoms ===
symptom_cols = [col for col in df_disease.columns if col.startswith("Symptom")]
all_symptoms = sorted({
    str(sym).strip().lower().replace(" ", "_")
    for col in symptom_cols
    for sym in df_disease[col].dropna()
    if str(sym).strip() != ""
})

symptom_id_map = {i + 1: s for i, s in enumerate(all_symptoms)}
symptom_name_map = {v: k for k, v in symptom_id_map.items()}


# === 3️⃣ Disease → symptoms dictionary ===
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


# === 4️⃣ Description & Precautions ===
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


# === 6️⃣ Home remedy lookup (from home_remedy.csv) ===
home_remedy_map = {}

for _, row in df_home_remedy.iterrows():
    disease = str(row.get("Health Issue", "")).strip()
    if not disease:
        continue

    item = str(row.get("Name of Item", "")).strip()
    remedy = str(row.get("Home Remedy", "")).strip()
    yogasan = str(row.get("Yogasan", "")).strip()

    entry = {}
    if item:
        entry["item"] = item
    if remedy:
        entry["remedy"] = remedy
    if yogasan:
        entry["yogasan"] = yogasan

    if not entry:
        continue

    home_remedy_map.setdefault(disease, []).append(entry)


# === 7️⃣ Extra disease info from gen1+gen2 (merged) ===
disease_extra_map = {}

for _, row in df_gen_merged.iterrows():
    disease = str(row.get("Disease", "")).strip()
    if not disease:
        continue

    info = {}
    for col in df_gen_merged.columns:
        if col == "Disease":
            continue

        val = row[col]
        # skip NaN / empty
        if pd.isna(val):
            continue
        val_str = str(val).strip()
        if not val_str:
            continue

        key = normalize_key(col)
        info[key] = val_str

    if info:
        disease_extra_map[disease] = info


# === 🧠 API Routes ===

@app.route("/symptoms", methods=["GET"])
def get_symptoms():
    """Return all symptoms with IDs"""
    return jsonify([
        {"id": sid, "name": name} for sid, name in symptom_id_map.items()
    ])

# === Build reverse index: symptom → diseases ===
symptom_to_diseases = {}
for disease, symptoms in disease_map.items():
    for s in symptoms:
        if s not in symptom_to_diseases:
            symptom_to_diseases[s] = set()
        symptom_to_diseases[s].add(disease)



@app.route("/diagnosis", methods=["GET"])
def get_diagnosis():
    ids = request.args.getlist("id", type=int)

    if not ids:
        return jsonify({"error": "Please provide one or more symptom IDs"}), 400

    selected_symptoms = [symptom_id_map[i] for i in ids if i in symptom_id_map]

    # ⭐ UNION OF ALL DISEASES FOR ANY SYMPTOM
    possible_diseases = set()
    for s in selected_symptoms:
        possible_diseases |= symptom_to_diseases.get(s, set())

    if not possible_diseases:
        return jsonify({
            "input_symptoms": selected_symptoms,
            "possible_diseases": [],
            "message": "No matching disease found for selected symptoms."
        })

    results = []
    for disease in possible_diseases:
        symptoms = disease_map[disease]

        matched_count = len(set(selected_symptoms) & symptoms)
        total = len(symptoms)
        ratio = round(matched_count / total, 2)

        severity_score = sum(
            severity_map.get(s, 1) for s in selected_symptoms if s in symptoms
        )

        results.append({
            "disease": disease,
            "matched_symptom_count": matched_count,
            "total_symptoms": total,
            "match_ratio": ratio,
            "severity_score": severity_score
        })

    # Sort results by best match
    results.sort(key=lambda x: (x["matched_symptom_count"], x["match_ratio"]), reverse=True)

    return jsonify({
        "input_symptoms": selected_symptoms,
        "possible_diseases": results
    })




@app.route("/details/<disease>", methods=["GET"])
def get_disease_details(disease):
    """
    Return description, precautions, home remedies
    and rich extra info from gen1+gen2.
    """
    disease = disease.strip()

    description = description_map.get(disease, "No description available.")
    precautions = precaution_map.get(disease, [])
    remedies = home_remedy_map.get(disease, [])

    response = {
        "disease": disease,
        "description": description,
        "precautions": precautions,
        "home_remedies": remedies
    }

    # Add extended info if available (hindi_name, prognosis, risk_factors, etc.)
    extra = disease_extra_map.get(disease)
    if extra:
        response.update(extra)

    return jsonify(response)


@app.route("/")
def home():
    return jsonify({
        "message": "Welcome to Local Medical API !",
        "routes": {
            "/symptoms": "List all symptoms with IDs",
            "/diagnosis?id=1&id=2": "Get possible diseases using symptom IDs",
            "/details/<disease>": "Get complete disease profile (description, precautions, home remedies, ayurveda, risk factors, prognosis, more)",
            "/remedies/<disease>": "Get home remedies and yogasan for a disease (if you want this separate)",
        },
        "datasets_loaded": {
            "dataset.csv": True,
            "symptom_description.csv": True,
            "symptom_precaution.csv": True,
            "Symptom-severity.csv": True,
            "home_remedy.csv": True,
            "gen1.csv": True,
            "gen2.xlsx": True
        },
        "notes": "Use /details/<disease> for the richest information including merged gen1/gen2 fields."
    })



if __name__ == "__main__":
    app.run(debug=True)
