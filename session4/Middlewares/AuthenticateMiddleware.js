const SERVER_API_KEY = "12345-ABCDE";
function AuthenticateMiddleware(req, res, next) {

    const authHeader = req.headers['authorization'];
    if (authHeader=== SERVER_API_KEY) {
        next(); // Call the next middleware or route handler
    }else{
        res.status(401).send('Unauthorized: Invalid or missing API key');
    }
}

module.exports = AuthenticateMiddleware;