const fs = require('fs');
const chalk = require('chalk');
const path = './notes.json'

const addNote = function(title, body){
    const notes = preloadNotes();
    const dupNotes = notes.filter(((note) => {
        return note.title === title;
    }))
    if(dupNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        console.log('Note with title \"', title, " \" added")
    }else {
        console.log('Note with title \"', title, " \" existed")
    }
    saveData(notes);
}

const removeNote = function(title) {
    const notes = preloadNotes();
    const removedNotes = preloadNotes().filter((note) => note.title !== title);
    if(notes.length !== removedNotes.length) {
        console.log(chalk.green.inverse('Note with title \"' + title + " \" removed"));
    }else {
        console.log(chalk.red.inverse('Note with title \"' + title + " \" not found"));
    }
    saveData(notes);
}

const listNotes = function() {
    console.log(chalk.blue.inverse('Note List'));
    preloadNotes().forEach((note) => {
        console.log(note.title);
    })
}

const readNotes = function(title) {
    const note  = preloadNotes().find((n) => {
        return n.title === title
    })
    if(note) {
        console.log(chalk.blue.inverse(note.title), '\n', note.body);
    } else {
        console.log(chalk.red.inverse('Note with title \"' + title + " \" not found"));
    }
}

const saveData = function(notes) {
    fs.writeFileSync(path, JSON.stringify(notes));
}

const preloadNotes = function() {
    try{
        return JSON.parse(fs.readFileSync(path,'utf-8'))
    }catch (e) {
        return [];
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
};
