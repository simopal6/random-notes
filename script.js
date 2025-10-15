const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

function getRandomNote() {
    const randomIndex = Math.floor(Math.random() * notes.length);
    return notes[randomIndex];
}

function updateNote() {
    const contentDiv = document.querySelector("#content");
    contentDiv.textContent = getRandomNote();
    setTimeout(updateNote, (document.querySelector("#duration").value || 3) * 1000);
}

updateNote();