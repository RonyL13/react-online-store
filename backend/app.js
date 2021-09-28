const express = require('express');
const app = express();
const routes = require('./routes/routes')
const mongoose = require('mongoose');
const cors = require('cors');
const myRepository = require('./myRepository');

app.use(
    cors({
        origin: "http://localhost:3000"
    })
)

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// Routing
app.use('/api', routes);

const uri = process.env.MONGODB_URI || `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.0cco4.mongodb.net/online-shop-database?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('Connected successfully to MongoDB!'))
 .catch(err => console.error('Something went wrong', err));



const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
    console.log(`Server is listening on port ${port}`);
})