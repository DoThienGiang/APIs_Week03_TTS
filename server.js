require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const studentRouter = require('./routes/student.route');
const parentRouter = require('./routes/parent.route');
const classRoomRouter = require('./routes/classRoom.route');
const app = express();


app.use(express.json());


// Connecting to the database
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})

// v1 api routes
app.use("/parents", parentRouter);
app.use("/students", studentRouter);
app.use("/classRooms", classRoomRouter);



app.listen(process.env.PORT, () =>
console.log(`Server start at port http://localhost:${process.env.PORT}`)
);