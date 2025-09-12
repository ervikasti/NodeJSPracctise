const express = require('express');
const server = express();
const HomeRoute = require("./Routes/HomeRoute");
const UserActivityRoute = require("./Routes/UserActivityRoute");
const UserModelRoute = require('./Routes/UserModelRoute');
const { mongoose } = require("mongoose");

const PORT = 8083;

// Controller Addeds
server.use('/',HomeRoute);

// // API endpoint to get user data
// server.use('/api/v1/users',UserActivityRoute);



// Till here every thing is working fine
// But the problem is all user data can be acccessed bu anyone
// so what can be the solution
// MiddleWares

// Middlewares are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. 
// The next middleware function is commonly denoted by a variable named next.

// Middlewares can perform the following tasks:
// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware function in the stack.

// Middleware now (we wish to authenticate user before accessing user data)

// we are setting up a simple API key based authentication
const AuthenticateMiddleware = require('./Middlewares/AuthenticateMiddleware');
server.use('/api/v1/users',AuthenticateMiddleware,UserActivityRoute);

// Now if we try to access user data without API key it will give 401 Unauthorized error
// we can access user data only if we provide the correct API key in the request header
// Example using curl
// curl -H "Authorization: 12345-ABCDE" http://localhost:8083/api/v1/users

// creating a new servercise to post user data
server.use(express.json()); // Middleware to parse JSON request body
server.use('/api/v2/users',UserModelRoute);


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/session4').then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});