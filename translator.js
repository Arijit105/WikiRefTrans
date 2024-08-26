// Syncing the output when input changes
document.getElementById('inputText').addEventListener('input', function() {
    const inputText = document.getElementById('inputText').value;
    // Translate function can be replaced with the actual translation logic
    const translatedText = inputText; // Placeholder for translation logic
    document.getElementById('outputText').value = translatedText;
});

// Syncing the input when output changes
document.getElementById('outputText').addEventListener('input', function() {
    const outputText = document.getElementById('outputText').value;
    // Reverse translation logic can be added here
    const reverseTranslatedText = outputText; // Placeholder for reverse translation logic
    document.getElementById('inputText').value = reverseTranslatedText;
});