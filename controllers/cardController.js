// controllers/cardController.js

const cardService = require('../services/cardService');

const getCards = async (req, res) => {
    try {
        const cards = await cardService.getCards();
        res.render('index', { cardLists: cards });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
};

const createCard = async (req, res, io) => {
    try {
        const card = await cardService.createCard(req.body.title, req.body.content, req.body.imageURL);
        io.emit('cardCreated', card); // Emit to all clients
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    getCards,
    createCard
};
