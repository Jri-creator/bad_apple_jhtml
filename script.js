const textDisplay = document.getElementById('text-display');
const totalFiles = 6572; // Total number of .txt files
let currentFileIndex = 1;
const displayInterval = 100; // 0.1 seconds (100 milliseconds)

// Function to fetch and display the text file
async function displayTextFile(index) {
    try {
        const response = await fetch(`txt/${index}.txt`);
        if (!response.ok) {
            throw new Error('Text file not found');
        }
        const text = await response.text();
        textDisplay.textContent = text; // Preserve formatting by using textContent
    } catch (error) {
        console.error('Error:', error);
        textDisplay.textContent = 'Error loading text file.';
    }
}

// Function to update the text display at regular intervals
function startDisplayingText() {
    setInterval(() => {
        displayTextFile(currentFileIndex);
        currentFileIndex++;
        if (currentFileIndex > totalFiles) {
            currentFileIndex = 1; // Loop back to the first text file
        }
    }, displayInterval);
}

// Start displaying the text files
startDisplayingText();
