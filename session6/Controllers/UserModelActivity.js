const UserModel = require('../Model/UserModel');
const UserService = require('../Services/UserService');

async function createUser(req, res) {
    const {body} = req;

    // A good pratice to destructure the body
    const {username, email, password} = body;

    // save the user to database is moved to Service
   try {
       const user = await new UserService(UserModel).createUser({username, email, password});
       res.status(201).json(user);
   } catch (error) {
       res.status(400).json({error: error.message});
   }
}

module.exports = {createUser};