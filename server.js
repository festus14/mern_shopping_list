const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// connect to DB
mongoose
    .connect(db)
    .then(() => console.log('Mongo DB Connected...'))
    .catch((err) => console.log(err));

// Use Routes
app.use('/api/items', items);

// Set port to heroku (for deployment) or port 5000(for development)
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));