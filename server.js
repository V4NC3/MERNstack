const express = require('experess');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = required('./routes/api/Items.js');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db)
    .then(()=>console.log('MongoDB Connected!'))
    .catch(err => console.log(err));

// Use Routes
// anything goes to the API/items/ will be deferred to the const items above. 
app.use('/api/items', items);


    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));