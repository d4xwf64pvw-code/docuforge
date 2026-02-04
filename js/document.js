function updatePreview() {
    const title = document.getElementById("docTitle").value;
    const issuer = document.getElementById("issuerName").value;
    const recipient = document.getElementById("recipientName").value;
    const content = document.getElementById("docContent").value;
    const themeColor = document.getElementById("themeColor").value;

    document.getElementById("previewTitle").innerText = title || "Document Title";
    document.getElementById("previewIssuer").innerText = issuer || "Issuer Name";
    document.getElementById("previewRecipient").innerText = recipient || "Recipient Name";
    document.getElementById("previewContent").innerText = content || "Document content will appear here...";

    document.getElementById("previewHeader").style.color = themeColor;

    const today = new Date().toLocaleDateString();
    document.getElementById("previewDate").innerText = today;

    const docNumber = "DF-" + Math.floor(Math.random() * 100000);
    document.getElementById("previewNumber").innerText = docNumber;

    const logoInput = document.getElementById("logoUpload");
    const photoInput = document.getElementById("photoUpload");

    if (logoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
            const logo = document.getElementById("previewLogo");
            logo.src = e.target.result;
            logo.style.display = "block";
        };
        reader.readAsDataURL(logoInput.files[0]);
    }

    if (photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
            const photo = document.getElementById("previewPhoto");
            photo.src = e.target.result;
            photo.style.display = "block";
        };
        reader.readAsDataURL(photoInput.files[0]);
    }
}

