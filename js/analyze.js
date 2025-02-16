const knownSequences = {
    ATGCCTAGG: "ATGCCTAGG",
    GCTATCGAT: "GCTATCGAT",
    CTAGCTAGC: "CTAGCTAGC"
};

document.getElementById("analyzeButton").addEventListener("click", () => {
    const geneticCode = document.getElementById("geneticInput").value.toUpperCase();
    analyzeGeneticCode(geneticCode);
});

function analyzeGeneticCode(code) {
    displayAnomalies(findAnomalies(code));
    displayMappingResults(mapToSequences(code, knownSequences));
    generateBarcode(code);
}

function findAnomalies(code) {
    const anomalies = [];
    for (let i = 0; i < code.length; i += 3) {
        const codon = code.slice(i, i + 3);
        if (codon.length !== 3) {
            anomalies.push(`Incomplete codon at position ${i}`);
        }
    }
    return anomalies;
}

function mapToSequences(code, sequences) {
    const results = {};
    for (const seq in sequences) {
        results[seq] = code.includes(sequences[seq]) ? "Present" : "Absent";
    }
    return results;
}

function displayAnomalies(anomalies) {
    const anomaliesList = document.getElementById("anomaliesList");
    anomaliesList.innerHTML = anomalies.length
        ? anomalies.map(a => `<li style="color: red;">⚠️ ${a}</li>`).join("")
        : `<p style="color: green;">✅ No anomalies detected</p>`;
}

function displayMappingResults(results) {
    const mappingResults = document.getElementById("mappingResults");
    mappingResults.innerHTML = Object.entries(results)
        .map(([seq, status]) => `<li>${seq}: <span style="color: ${status === "Present" ? "green" : "red"};">${status}</span></li>`)
        .join("");
}

function generateBarcode(code) {
    const barcodeContainer = document.getElementById("barcode");
    barcodeContainer.innerHTML = "";
    const colors = { A: "green", T: "red", G: "yellow", C: "blue" };

    code.split("").forEach(base => {
        const bar = document.createElement("div");
        bar.style.background = colors[base] || "gray";
        barcodeContainer.appendChild(bar);
    });
}
