const express = require("express");
const { addNote, getAllNotes, updateNote } = require("../contollers/notes");
const { verifyToken } = require("../middlewares/authMiddleware");
const router = express.Router();


router.post("/add", verifyToken, addNote);
router.get("/getallnotes", verifyToken, getAllNotes);
router.put("/update/:noteId", verifyToken, updateNote)
module.exports = router;

// verify token in all routes

// to do 
// localhost:8000/note/add
// localhost:8000/note/update/:noteId
// localhost:8000/note/delete/:noteId
// localhost:8000/note/getalllnodes
