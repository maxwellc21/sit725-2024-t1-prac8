// server.js

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const socketIo = require('socket.io');
const path = require('path');
const connectDB = require('./dbconnection');
const cardRouter = require('./routes/index'); // Assuming routes are defined in index.js

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.set('socketio', io); // Attach io instance to app

// Connect to the database
connectDB();

// Express middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Setup routes
app.use('/', cardRouter);

// Socket.io connection
io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });

    socket.on('createCard', (card) => {
        io.emit('cardCreated', card); // Emit to all clients, including sender
    });
});

// Start the server
server.listen(8080, () => {
    console.log('Server is running on port 8080');
});
