const path = require('path');
const express = require('express');
const app = express();

const route = require('./routes');


app.use(express.static(path.resolve(__dirname, '..', 'public')));


app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(route);



app.listen(3002, () => {
    console.log('Access http://localhost:3002');
    console.log('Server is running on port 3002');
});
