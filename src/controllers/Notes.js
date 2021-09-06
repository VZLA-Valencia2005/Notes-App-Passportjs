const Note = require("../models/Note");
const bcrypt = require("bcrypt");

async function CreateNote(req, res) {
  if (req.body) {
    const { title, description } = req.body;

    if (title && description) {
      //falta el id de usuario para identificar las notas
      const note = new Note({ title, description, user: "1" });
      await note.save();
      return res.status(200).send("ok");
    } else {
      return res.status(404).send({ message: "la nota no puede estar vacia" });
    }
  } else {
    return res.status.send({ message: "error en la peticion" });
  }
}

module.exports = {
  CreateNote,
};
