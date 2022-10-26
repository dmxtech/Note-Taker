const notetitle = document.getElementsByClassName('note-title').value;
const notetext = document.getElementsByClassName('note-textarea').value;
const app = express();

// GET// GET Route for retrieving all the note
app.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

app.post('/', (req, res) => {
    console.log(req.body);

    const { notetitle, notetext } = req.body;

    if (req.body) {
        const newNote = {
            notetitle,
            notetext,
            note_id: uuidv4(),
        };
        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully 🚀`);
    } else {
        res.error('Error in adding Note');
    }
});
// DELETE Route for a specific note
app.delete('/:note_id', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            // Make a new array of all note except the one with the ID provided in the URL
            const result = json.filter((note) => note.note_id !== noteId);

            // Save that array to the filesystem
            writeToFile('./db/db.json', result);

            // Respond to the DELETE request
            res.json(`Item ${noteId} has been deleted 🗑️`);
        });
});
module.exports = app;

