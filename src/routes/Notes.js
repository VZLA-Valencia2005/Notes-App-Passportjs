const express = require('express');
const router = express.Router();

router.get('/create', (req, res) => {
    res.status(200).render('notes/create');
});



module.exports = router;