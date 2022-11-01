const fs = require('fs');
let noteData = require('../db/db.json');
const router = require("express").Router();
const { uuid } = require('uuidv4');
// GET// GET Route for retrieving all the note
router.get('/api/notes', (req, res) => {
    //JSON.parse(noteData)

    res.json(noteData)
});


router.post('/api/notes', (req, res) => {
    console.log(req.body);

    if (req.body) {
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuid(),

        };
        noteData.push(newNote);



        fs.writeFile('./db/db.json', JSON.stringify(noteData), (err) => {
            if (err) {
                console.log(console.error());
            }
            console.log(`Note added successfully 🚀`);
        })

    }
});

router.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;
    console.log("noteid", noteId);
    console.log("notedata", noteData);
    //console.log("note.id", note.id);
    noteData = noteData.filter((note) => note.id !== noteId);
    fs.writeFile('./db/db.json', JSON.stringify(noteData));
    console.log(`Note ${noteId} has been deleted 🗑️`);

});

module.exports = router;
// fs.readFile('./db/db.json', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//     } else {

//         const parsedNotes = JSON.parse(data);
//         parsedNotes.push(newNote);
//         fs.writeFile(
//             './db/db.json',
//             JSON.stringify(parsedReviews, null, 4),
//             (writeErr) =>
//                 writeErr
//                     ? console.error(writeErr)
//                     : console.info('Successfully updated reviews!')
//         );
//     }
// });



// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static('public'));
//
// // DELETE Route for a specific note



