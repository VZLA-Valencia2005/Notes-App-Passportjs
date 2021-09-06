const mongoose = require('mongoose');
const NoteSchema = mongoose.Schema;

const Note = new NoteSchema({
    title: String,
    description: String,
    user: String
});

module.exports = model('Note', Note);