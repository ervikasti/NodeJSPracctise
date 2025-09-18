const env = require('dotenv');

env.config();



function userAuthenticationMiddleware(req, res, next) {
    // Middleware logic for user authentication
    // console.log(process.env.x_api_key);
    // logic to authenticate user
    const {"x-api-key":authKey} = req.headers;
    
    if(authKey === process.env.x_api_key){
        console.log("User Authenticated");
        next();
    }else{
        res.status(403).json({message:"Unauthorised Access"})
    }
    
}

module.exports = { userAuthenticationMiddleware };