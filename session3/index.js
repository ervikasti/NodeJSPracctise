const userData = require('./userData');

const server = require('express')();
const PORT = 8083;


server.get('/',(req,res)=>{
    res.send('<h1> Hello you are on / path</h1>');
})

server.get('/about',(req,res)=>{
    res.status(200).send('<h1> This is about us page</h1>');
})

// API endpoint to get user data
server.get('/api/v1/users',(req,res)=>{
    res.json(userData);
})

// API endpoint to get user data by gender query parmaeter method 1
// server.get('/api/v1/users',(req,res)=>{
//     const params = req.query;
//
server.get('/api/v1/users/search',(req,res)=>{
    const params = req.query;
    // const gender = params.gender;
    // console.log(`Searching users by gender: ${gender}`);
    const filteredData = userData.data.filter(user => user.gender === params.gender);
    res.status(200).json({data:filteredData, size: filteredData.length});
})

// API endpoint to get username
server.get('/api/v1/users/:firstName',(req,res)=>{
    const params = req.params;
    const firstName = params.firstName;
    const filteredData = userData.data.filter(user => user.name.first.toLowerCase() === firstName.toLowerCase());
    if(filteredData.length > 0){
        res.status(200).json({data:filteredData, size: filteredData.length});
    }else{
        res.status(404).send(`User with first name ${firstName} not found`);
    }
})

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});