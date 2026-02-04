let selectedType = "";

function selectType(type) {
    selectedType = type;
    const fields = document.getElementById("dynamicFields");

    if (type === "student") {
        fields.innerHTML = `
            <label>Student Name</label>
            <input type="text" id="studentName">
            <label>Class</label>
            <input type="text" id="studentClass">
            <label>Teacher Comment</label>
            <textarea id="teacherComment"></textarea>
        `;
    }

    if (type === "business") {
        fields.innerHTML = `
            <label>Party A</label>
            <input type="text" id="partyA">
            <label>Party B</label>
            <input type="text" id="partyB">
            <label>Agreement Terms</label>
            <textarea id="terms"></textarea>
        `;
    }

    if (type === "finance") {
        fields.innerHTML = `
            <label>Client Name</label>
            <input type="text" id="clientName">
            <label>Amount</label>
            <input type="number" id="amount">
            <label>Purpose</label>
            <textarea id="purpose"></textarea>
        `;
    }

    if (type === "personal") {
        fields.innerHTML = `
            <label>Your Name</label>
            <input type="text" id="yourName">
            <label>Recipient</label>
            <input type="text" id="recipient">
            <label>Message</label>
            <textarea id="message"></textarea>
        `;
    }
}

function updatePreview() {
    const preview = document.getElementById("previewContent");
    let text = "";

    if (selectedType === "student") {
        text = `Student: ${studentName.value}\nClass: ${studentClass.value}\nComment: ${teacherComment.value}`;
    }

    if (selectedType === "business") {
        text = `Agreement Between ${partyA.value} and ${partyB.value}\nTerms:\n${terms.value}`;
    }

    if (selectedType === "finance") {
        text = `Client: ${clientName.value}\nAmount: $${amount.value}\nPurpose: ${purpose.value}`;
    }

    if (selectedType === "personal") {
        text = `From: ${yourName.value}\nTo: ${recipient.value}\nMessage:\n${message.value}`;
    }

    preview.innerText = text || "Your generated document will appear here.";

    document.getElementById("previewDate").innerText = new Date().toLocaleDateString();
    document.getElementById("previewNumber").innerText = "DF-" + Math.floor(Math.random() * 100000);
}
