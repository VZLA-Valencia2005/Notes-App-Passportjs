const express = require("express");
const router = express.Router();
const noteController = require("../controllers/Notes");

router.get("/create", (req, res) => {
  res.status(200).render("notes/create");
});

router.post("/create", noteController.CreateNote);

module.exports = router;
