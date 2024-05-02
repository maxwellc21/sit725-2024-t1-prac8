// routes/index.js

const express = require('express');
const cardController = require('../controllers/cardController');
const router = express.Router();

router.get("/", cardController.getCards); // Display all cards

router.post("/", (req, res) => {
    const io = req.app.get('socketio'); // Get the io instance
    cardController.createCard(req, res, io);
});

module.exports = router;
