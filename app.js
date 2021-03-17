const getNotes = require("./notes.js");
const chalk = require("chalk");
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
    handler: function (argv) {
        console.log("Title: " + argv.title);
        console.log("Body: " + argv.body);
    },
});

// removing a note
yargs.command({
    command: "remove",
    describe: "Removing a note",
    handler: function () {
        console.log("Removed a note");
    },
});

// list the note
yargs.command({
    command: "list",
    describe: "List all the notes",
    handler: function () {
        console.log("Lists all the notes");
    },
});

// read a note
yargs.command({
    command: "read",
    describe: "read a note",
    handler: function () {
        console.log("Read a note");
    },
});

yargs.parse();
