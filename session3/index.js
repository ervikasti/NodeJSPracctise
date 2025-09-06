const server = require('express');
const PORT = 8083;
const HomeRoute = require('./routes/HomeRoute');
const UserActivityRoute = require('./Routes/UserActivityRoute');

// Controller Added
server.use('/',HomeRoute);

// API endpoint to get user data
server.use('/api/v1/users',UserActivityRoute);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


