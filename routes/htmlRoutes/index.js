const router = require('express').Router();
const path = require('path');
const apiRoutes = require('../apiRoutes');

// get method to return the notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
});

// get method to return the index.html file
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
});

module.exports = router;