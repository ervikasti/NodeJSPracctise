// Alaways remember NOT to use function inside Services
// Services are always a class
// Because of IoC (Inversion of Control) and DI (Dependency Injection)
// We can use constructor to inject dependencies
// We can use methods to define the functionalities

class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async createUser({username, email, password}) {
        try {
            // will create object of UserModel
            const newUser = new this.userModel({username, email, password});
            // save the user details
            return await newUser.save();
        } catch (error) {
            return error;
        }
        
    }

}

module.exports = UserService;
