const router = require('express').Router();
const { findById, createNote, deleteNote, validateNote } = require('../../lib/notes');
const { notesArray } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notesArray;
    res.json(results);
});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notesArray);
    if (result) {
        res.json(result);
      } else {
        res.send(404);
      }
});

router.post('/notes', (req, res) => {
    req.body.id = notesArray.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send('This note is not properly formatted.');
    } else {
        const note = createNote(req.body, notesArray);
        res.json(note);
      }
});

router.delete('/notes/:id', (req, res) => {
  deleteNote(req.params.id, notesArray);
  res.status(200).json({
    message: "Value deleted"
  });
});

module.exports = router;