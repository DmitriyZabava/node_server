const fs = require("fs/promises");
const path = require("path");
const chalk = require("chalk");

const notesPath = path.join(__dirname, "db.json");


async function addNotes(title) {
    const notes = await getNotes();

    const note = {
        title,
        id: Date.now().toString()
    };
    notes.push(note);

    await saveNotes(notes);
    console.log(chalk.bgBlueBright("Note was added!"));
}


async function getNotes() {
    const notes = await fs.readFile(notesPath, {encoding: "utf-8"});
    return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}

async function saveNotes(notes) {
    await fs.writeFile(notesPath, JSON.stringify(notes));
}


async function removeNotes(id) {
    const notes = await getNotes();

    const filteredNotes = notes.filter((note) => note.id !== id);

    await saveNotes(filteredNotes);
    console.log(chalk.red(`Notes ${id} deleted`));
}

async function editNotes(id, title) {

    const notes = await getNotes();
    notes.map((note) => {
        if(note.id === id) {
            note.title = title;
        }
    });
    await saveNotes(notes);


}

async function printNotes() {
    const notes = await getNotes();

    console.log(chalk.blue("Here is the list of notes:"));
    notes.forEach(note => {
        console.log("Title", chalk.blue(note.title), ":", "ID", chalk.green(note.id));
    });
}

module.exports = {
    addNotes, removeNotes, getNotes, editNotes
};