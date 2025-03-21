// Generate QR Code
function generateQRCode() {
    const text = document.getElementById("text").value.trim();

    if (!text) {
        alert("Please enter a valid URL or text!");
        return;
    }

    const qrContainer = document.getElementById("qr-container");
    qrContainer.innerHTML = "";  // Clear previous QR code

    // Generate QR code
    const qrCode = new QRCode(qrContainer, {
        text: text,
        width: 200,
        height: 200,
        colorDark: "#000",
        colorLight: "#fff"
    });

    // Display download button
    const downloadBtn = document.getElementById("download-btn");
    downloadBtn.style.display = "block";
}

// Download QR Code
function downloadQRCode() {
    const qrCanvas = document.querySelector("#qr-container canvas");

    if (qrCanvas) {
        const qrImage = qrCanvas.toDataURL("image/png");
        
        // Create a download link
        const link = document.createElement("a");
        link.href = qrImage;
        link.download = "qrcode.png";
        link.click();
    }
}
