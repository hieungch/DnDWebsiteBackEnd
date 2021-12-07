const express = require("express");
const router = express.Router();
const note = require("../models/note");
const bodyParser = require("body-parser");
let jsonParser = bodyParser.json();

// get all notes
router.get("/", jsonParser, async (req, res) => {
  let result = await note.find();
  //console.log(result);
  res.json(result);
});

// get note by id
router.get("/:id", async (req, res) => {
  let result = await note.aggregate([
    { $match: { id: parseInt(req.params.id, 10) } },
  ]);
  if (result.length == 0) {
    res.sendStatus(404);
  }

  res.json(result[0]);
});

// create new note
router.post("/", jsonParser, async (req, res) => {
  let c = await note.find().sort({ id: -1 }).limit(1);

  let maxid = c[0].id;
  // console.log("maxid=", maxid, typeof maxid);
  let newNote = {
    id: maxid + 1,
    noteTitle: req.body.noteTitle,
    noteDescription: req.body.noteDescription,
  };
  console.log("new Note=", newNote);
  await note.insertMany(newNote);
  /// 200 mean success
  res.sendStatus(200);
});

// Update the note
router.put("/:id", jsonParser, async (req, res) => {
  let upNote;
  try {
    upNote = await note.findOne({ id: parseInt(req.params.id, 10) });
    if (upNote == null) {
      return res.sendStatus(404);
    }
    upNote.noteTitle = req.body.noteTitle;
    upNote.noteDescription = req.body.noteDescription;
    await upNote.save();
    console.log("NewCharsheets=", upNote);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

//Delete a note
router.delete("/:id", jsonParser, async (req, res) => {
  let deleteNote;
  try {
    deleteNote = await note.findOne({
      id: parseInt(req.params.id, 10),
    });
    if (deleteNote == null) {
      return res.sendStatus(404);
    }
    await deleteNote.remove();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
