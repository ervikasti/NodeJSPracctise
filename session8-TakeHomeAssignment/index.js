const express = require('express');
const server = express();
const mongoose = require('mongoose');
const PORT = 8082;
const routes = require('./routes/index');

server.use(express.json()); // Middleware to parse JSON request body

// User Route to handle user related API endpoints
//  use takes all the incoming request to /api/v1/users and forwards it to UserRoute
server.use('/',routes);


// connect to MongoDB
mongoose.connect('mongodb://localhost:27017/discussion-forum').then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
}); 

// connect server to port 8082
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
