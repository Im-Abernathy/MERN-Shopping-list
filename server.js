const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB Config Key
const db = require('./config/keys').mongoURI;

// Connect to mongoDB
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(error => console.log(error));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))