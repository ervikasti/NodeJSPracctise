const userService = require("../services/user.service");
const userModel = require("../model/user.model");

async function createUser(req, res) {

    const{fullName, username, email} = req.body;

    try {
        const newUser = await new userService(userModel).createUser({fullName, username, email});
        res.status(200).json(newUser);
    } catch (error) {
        if(error.message === "Already Exists in DB") {
        res.status(409).json({ message: "Failed to create new user", reason: error.message });
        } else {
            res.status(500).json({ message: "Failed to create new user", reason: error.message });
        }
    }
};

// Get all user details
async function getAllUser(req,res){
    try {
       const users = await new userService(userModel).getAllUser();
       if(users.length==0){
            res.status(404).json({message:"No Users found"});
       }else{
        res.status(200).json(users);
       }
       
    } catch (error) {
        res.status(500).json({error:error.message});
    }
    
}

// get user by name provided in the request
async function getUserName(req,res){
    const params = req.params;
    const username = params.username;
     console.log(username);
    try {
        const data = await new userService(userModel).getUserByName(username);
        data.length==0?(res.status(404).json({message:`User not found! ${username}`})):(res.status(200).json(data));
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
module.exports = { createUser, getAllUser, getUserName };
