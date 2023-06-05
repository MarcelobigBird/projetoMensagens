const express = require('express');
const route = express.Router();
const questionController = require('./controllers/QuestionController');
const roomController = require('./controllers/RoomController');

route.get('/', (req, res) =>  res.render('home', { page: 'enter-room' }));
route.get('/create-pass', (req, res) => res.render('home', { page: 'create-pass' }));


// Formato que o formulário de dentro da modal tem que passar a informação 
route.post('/question/:room/:question/:action', questionController.index);
route.post('/create-room', roomController.create);
route.get('/room/:roomId', (req, res) => res.render('room'));

module.exports = route;