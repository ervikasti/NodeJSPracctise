const {validateUser} = require('../Validator/UserInputValidator');

function userInputValidatorMiddleware(req,res,next) {
    const {body} = req;
    const {error} = validateUser(body);
    // console.log("In UserInputValidatorMiddleware",error);
    if (error) {
        return res.status(400).json({ error: error});
    }
    next();
}

module.exports = userInputValidatorMiddleware;