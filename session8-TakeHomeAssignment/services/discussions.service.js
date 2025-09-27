const discussionsModel = require('../model/discussions.model');


class  DiscussionsService{

     static async createNewDiscussion(body){
        const{title,author,content} = body;

        try {
            const newDiscussion = await discussionsModel.create({title,author,content});
            return newDiscussion;
        } catch (error) {
            return error;
        }

    }

    static async getAllDiscussion(){
        try {
            const allData = await discussionsModel.find({});
            return allData;
        } catch (error) {
            //  return error;
            throw new error;
        }
    }

    static async getDiscussionByAuthor(author){
        try {
            const discusions = await discussionsModel.find({author:author}).exec();
            return discusions;
        } catch (error) {
            throw error;
        }
    }

    static async getDiscussionById(id){
        
        try {
            const discusion = await discussionsModel.findById(id).exec();
            return discusion;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = DiscussionsService;