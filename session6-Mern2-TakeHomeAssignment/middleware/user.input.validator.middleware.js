const { validateUser } = require("../validator/user.validator");

function userInputValidator(req, res, next) {
    const {body} = req;
   const {error}=  validateUser(body);

   if(error){
    return res.status(400).json({error: error.details[0].message});
   }

   next();
};

module.exports = userInputValidator;