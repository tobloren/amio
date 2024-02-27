// truncate-text.js

let originalText1;
let originalText2;
let originalText3;
let originalText4;

function truncateText(elementId, maxLength) {
    const textElement = document.getElementById(elementId);
    const originalText = textElement.textContent;
    if (originalText.length > maxLength) {
        originalText1 = originalText; // Speichere den vollständigen Text
        originalText2 = originalText;
        originalText3 = originalText;
        originalText4 = originalText;
        const truncatedText = originalText.slice(0, maxLength) + '...';
        textElement.textContent = truncatedText;
    } else {
        originalText1 = null; // Der Text ist bereits kürzer als 150 Zeichen
    }
}
