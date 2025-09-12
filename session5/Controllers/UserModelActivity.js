const UserModel = require('../Model/UserModel');

async function createUser(req, res) {
    const {username, email, password} = req.body;

    // will create object of UserModel
    const newUser = new UserModel({username, email, password});

    // save the user to database
   try {
       await newUser.save();
       res.status(201).json(newUser);
   } catch (error) {
       res.status(400).json({error: error.message});
   }
}

module.exports = {createUser};