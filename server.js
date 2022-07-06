const express = require('express');
const bodyParser = require('body-parser');
const student = require('./routes/student.route'); // Imports routes for the products
const app = express();

// Configuring the database
const dbConfig = 'mongodb+srv://admin:admin123456@week03vinova.drsiymq.mongodb.net/?retryWrites=true&w=majority';
const mongoose = require('mongoose');

// Connecting to the database
// mongoose.set('useCreateIndex', true);
mongoose.connect(dbConfig, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', student);


let port = 3000;
app.listen(port, () => {
    console.log('Server start at Port ' + port);
});