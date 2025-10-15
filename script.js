// Random Notes JavaScript
const notes = [
    "Remember to take breaks while coding!",
    "Drink water and stay hydrated.",
    "A bug is just an undocumented feature.",
    "Code reviews are your friends.",
    "Always comment your code for future you.",
    "Test your code before deploying.",
    "Keyboard shortcuts can save you time.",
    "Learn something new every day.",
    "Don't repeat yourself (DRY principle).",
    "Version control is essential."
];

function getRandomNote() {
    const randomIndex = Math.floor(Math.random() * notes.length);
    return notes[randomIndex];
}

function displayRandomNote() {
    const contentDiv = document.getElementById('content');
    const randomNote = getRandomNote();
    contentDiv.innerHTML = `<p><strong>Random Note:</strong> ${randomNote}</p>`;
}

// Add event listener when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    generateBtn.addEventListener('click', displayRandomNote);
    
    // Display a welcome message
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<p>Click the button above to see a random note!</p>';
});
