const express = require('express');
const questionController = require('./controllers/QuestionController');
const roomController = require('./controllers/RoomController');

const route = express.Router();

route.get('/', (req, res) =>  res.render('home', { page: 'enter-room' }));
route.get('/create-pass', (req, res) => res.render('home', { page: 'create-pass' }));

// Rotas da room
route.post('/create-room', roomController.create);
route.get('/room/:room', roomController.open);
route.post('/enterroom', roomController.enter);

// Rota das questions
route.post('/question/create/:roomId', questionController.create);
route.post('/question/:roomId/:questionId/:action', questionController.index);

module.exports = route;