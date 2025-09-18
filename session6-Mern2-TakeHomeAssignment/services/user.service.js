class UserService {

    constructor(userModel){
        this.userModel = userModel;
    }

    async createUser({fullName,username,email}){
        try{
             const newUser = await new this.userModel({fullName,username,email}).save();
             return newUser;

        }catch(error){

            if(error.code === 11000){
                console.log("Duplicate key error");
                throw new Error("Already Exists in DB");
            }
            throw error;
        }
    }

    async getAllUser(){
        try {
           const user =  await this.userModel.find({});
           return user;
        } catch (error) {
            throw error;
        }
    }

    async getUserByName(username){
        try {
            const data = await this.userModel.find({username:username}).exec();
            // console.log("in service getByName: ",data);
            return data;
        } catch (error) {
            throw error;
        }
    }


}

module.exports = UserService;