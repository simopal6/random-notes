forms = ["E", "A", "D", "C", "G"];
types = ["maj", "m", "7", "m7", "maj7"];

function getVariant(form, type) {
    const variant = Math.floor(Math.random() * 2) + 1;
    if(form === "E" && type === "7" ||
       form === "A" && type === "7" ||
       form === "E" && type === "m7" ||
       form === "A" && type === "m7" ||
       form === "G" && type === "maj")
    {
        return variant;
    }
    return null;
}

const note_sets = {
    basic: ["A", "B", "C", "D", "E", "F", "G"],
    sharps: ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
    sharps_flats: ["A", "A#", "Bb", "B", "C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#","Ab"]
};

function getRandomBasicChord() {
    const root = forms[Math.floor(Math.random() * forms.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const variant = getVariant(root, type);
    return root + type + (variant ? " (v" + variant + ")" : "");
}

function getRandomChord() {
    const root = note_sets.sharps_flats[Math.floor(Math.random() * note_sets.sharps_flats.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const form = forms[Math.floor(Math.random() * forms.length)];
    const variant = getVariant(form, type);
    return root + type + " in " + form + (variant ? " (v" + variant + ")" : "");
}

function updateNote() {
    const mode = document.querySelector("#mode").value;
    const contentDiv = document.querySelector("#content");
    let chord1 = null;
    let chord2 = null;
    if (mode === "basic_only") {
        chord1 = getRandomBasicChord();
        while((chord2 = getRandomBasicChord()) === chord1) {}
    }
    else if ( mode === "basic_at_least_one") {
        chord1 = getRandomBasicChord();
        while((chord2 = getRandomChord()) === chord1) {}
    }
    else if (mode === "any") {
        chord1 = getRandomChord();
        while((chord2 = getRandomChord()) === chord1) {}
    }
    contentDiv.innerHTML = chord1 + "<br>+<br>" + chord2;
}

document.querySelector("button").addEventListener("click", updateNote);