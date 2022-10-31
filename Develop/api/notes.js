const notetitle = document.getElementsByClassName('note-title').value;
const notetext = document.getElementsByClassName('note-textarea').value;
const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 3001;
const path = require('path');
const noteData = require('./db/db.json');

// GET// GET Route for retrieving all the note


app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));
});

app.get('/api/notes', (req, res) => res.json(noteData));



fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {

        const parsedNotes = JSON.parse(data);
        parsedNotes.push(newNote);

        app.listen(PORT, () => {
            console.log(`Example app listening at http://localhost:${PORT}`);
        });
        module.exports = app;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static('public'));
// app.post('/', (req, res) => {
//     console.log(req.body);

//     const { notetitle, notetext } = req.body;

//     if (req.body) {
//         const newNote = {
//             notetitle,
//             notetext,
//             note_id: uuidv4(),
//         };
//         readAndAppend(newNote, './db/db.json');
//         res.json(`Note added successfully 🚀`);
//     } else {
//         res.error('Error in adding Note');
//     }
// });
// // DELETE Route for a specific note
// app.delete('/:note_id', (req, res) => {
//     const noteId = req.params.note_id;
//     readFromFile('./db/db.json')
//         .then((data) => JSON.parse(data))
//         .then((json) => {
//             // Make a new array of all note except the one with the ID provided in the URL
//             const result = json.filter((note) => note.note_id !== noteId);

//             // Save that array to the filesystem
//             writeToFile('./db/db.json', result);

//             // Respond to the DELETE request
//             res.json(`Item ${noteId} has been deleted 🗑️`);
//         });
// });


