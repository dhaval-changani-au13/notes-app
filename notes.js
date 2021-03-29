const fs = require("fs");
const chalk = require("chalk");
const { title } = require("process");
const { prototype } = require("events");

const getNotes = function () {
    return "Your Notes...";
};

const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) => note.title === title);

    // this meathod will stop once it finds a match
    const findNote = notes.find((note) => note.title === title);

    if (!findNote) {
        notes.push({
            title: title,
            body: body,
        });
        writeNote(notes);
        console.log("New Note added.");
    } else {
        console.log("Title already taken.");
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const findNotes = notes.filter((note) => note.title != title);

    if (findNotes.length != notes.length) {
        writeNote(findNotes);
        console.log(chalk.green("Note Removed."));
    } else {
        console.log(chalk.red("No note found with given title."));
    }
};

const readNote = (title) => {
    const notes = loadNotes();
    const findNote = notes.find((note) => note.title === title);
    if (findNote) {
        console.log(chalk.yellow("Title: ", title));
        console.log("Body: ", findNote.body);
    } else {
        console.log(chalk.red.inverse("Note not found!"));
    }
};

const writeNote = (notes) => {
    const data = JSON.stringify(notes);
    fs.writeFileSync("notes.json", data);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const listNotes = () => {
    const all_notes = loadNotes();
    console.log(chalk.yellow.inverse("Your Notes."));
    all_notes.forEach((note) => console.log("Title: ",note.title, "\nBody: ", note.body, "\n"));
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
};
