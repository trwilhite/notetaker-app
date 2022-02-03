const router = require('express').Router();
const fs = require('fs');
const data = require('../../db/db.json');
// use npm package uuid to create unique id's for each note
const uuid = require('uuid');

// get method to read db.json file and return saved notes as JSON
router.get('/notes', (req, res) => {
    // read data from db.json file
    const data = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));

    // return all saved notes as JSON
    res.json(data);
});

// post method to receive new notes added by client
router.post('/notes', (req, res) => {
    // body object that the client creates will include title and text varirables, then we use uuid to create a unique id for the created note
    const { title, text } = req.body;
    const id = uuid.v4();

    // created note variable includes the client's title and text, and adds the uniquely created id
    const newNote = { title, text, id };

    // add the newly created note to the db file
    data.push(newNote);
    fs.writeFile(`./db/db.json`, JSON.stringify(data), (err) =>
        err
            ? console.error(err)
            : console.log(
                `New note has been written to JSON file`
            )
    );

    // return the new note to the client
    res.json(data);
});

module.exports = router;