const notes = require("./notes.js");
const yargs = require("yargs");

// changing the version of the app
yargs.version("1.1.0");

// Adding a note
yargs.command({
    command: "add",
    describe: "Adding a note",
    builder: {
        title: {
            describe: "Title",
            demandOption: true,
            typeof: "string",
        },
        body: {
            describe: "Body",
            demandOption: true,
            typeof: "string",
        },
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    },
});

// removing a note
yargs.command({
    command: "remove",
    describe: "Removing a note",
    builder: {
        title: {
            describe: "Title",
            demandOption: true,
            typeof: "string",
        },
    },
    handler(argv) {
        notes.removeNote(argv.title);
    },
});

// list the note
yargs.command({
    command: "list",
    describe: "List all the notes",
    handler() {
        notes.listNotes();
    },
});

// read a note
yargs.command({
    command: "read",
    describe: "read a note",
    builder: {
        title: {
            describe: "title",
            demandOption: true,
            typeof: "string",
        },
    },
    handler(argv) {
        notes.readNote(argv.title);
    },
});

yargs.parse();
