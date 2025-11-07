const note_sets = {
    basic: ["A", "B", "C", "D", "E", "F", "G"],
    sharps: ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
    sharps_flats: ["A", "A#", "Bb", "B", "C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#","Ab"]
};

let current_set = null;
let current_index = null;
let current_notes = null;

function newCurrentSet() {
    const selected_set = document.querySelector("#note_set").value;
    current_set = selected_set;
    // Shuffle notes from current set
    current_notes = note_sets[current_set].slice().sort(() => Math.random() - 0.5);
    current_index = 0;
}

document.querySelector("#note_set").addEventListener("change", newCurrentSet);
newCurrentSet();

function updateNote() {
    const selected_strings = 6; //parseInt(document.querySelector("#string_set").value);
    let selected_string = null;
    if(selected_strings != 6) {
        // Random string between selected string and 6
        selected_string = Math.floor(Math.random() * (7 - selected_strings)) + selected_strings;
    }
    const contentDiv = document.querySelector("#content");
    contentDiv.textContent = current_notes[current_index];
    if(selected_string) {
        contentDiv.innerHTML += "<br>(on " + selected_string + ")";
    }
    current_index++;
    if (current_index >= current_notes.length) {
        newCurrentSet();
    }
    setTimeout(updateNote, (document.querySelector("#duration").value || 5) * 1000);
}

updateNote();