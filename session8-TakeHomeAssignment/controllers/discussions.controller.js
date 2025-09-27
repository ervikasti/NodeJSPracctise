const discussionsService = require('../services/discussions.service');
const UserService = require('../services/user.service');
const userModel = require('../model/user.model');
const mongoose = require('mongoose');
async function createDiscussion(req,res){


      const{title,author,content} = req.body;
    //Check if the author is present inside the User Service
    // if Yes go ahead and create new discusion else
    // Return error as author not found
    const isUser = await new UserService(userModel).getUserByName(author);
    console.log("User details : ",isUser);
    if(isUser.length === 0){
       return res.status(404).json({message: "User not found ",author})
    }

    //calling the service layer to create the data

    try {
       const newDiscusion =  await  discussionsService.createNewDiscussion(req.body)
       console.log("New discussion created : ",newDiscusion);
       res.status(201).send(newDiscusion);
    } catch (error) {
        console.log("failed to create user", error);
        res.status(500).json({error:error})
    }

    


}


async function getAllDiscussions(req,res){
    //call the service layer to get all the details
 try {
    const allDiscussions = await discussionsService.getAllDiscussion();
    
    if (!allDiscussions || allDiscussions.length === 0) {
      return res.status(404).json({ message: "No Data found" });
    }

    res.status(200).json(allDiscussions);

  } catch (err) {
    console.error("Controller caught error:", err.message);
    res.status(500).json({ error: "Failed to fetch discussions", details: err.message });
  }
}

async function getDiscussionByUsername(req,res) {
    const searchAuthor= req.params.username;

    //call the service to fetch the detail by author
    try {
      const discusions =  await  discussionsService.getDiscussionByAuthor(searchAuthor);
      if(!discusions || discusions.length===0){
        return res.status(404).json({ message: "No Data found" });
      }
      res.status(200).json(discusions);
    } catch (err) {
        console.error("Controller getByAuthor caught error:", err.message);
        res.status(500).json({ error: "Failed to fetch discussions", details: err.message });

    }
    
    
}

async function getDiscussionById(req,res) {
     const searchId = req.params.id;
    console.log("get by id:", searchId);

    if (!mongoose.Types.ObjectId.isValid(searchId)) {
        return res.status(400).json({ message: "Invalid discussion ID" });
    }

    try {
        const discussion = await discussionsService.getDiscussionById(searchId);

        if (!discussion) {
            return res.status(404).json({ message: "Discussion not found" });
        }

        res.status(200).json(discussion);
    } catch (error) {
        console.error("Controller getById caught error:", error.message);
        res.status(500).json({ error: "Failed to fetch discussions", details: error.message });
    }
    
}

module.exports = {
    createDiscussion:createDiscussion,
    getAllDiscussions:getAllDiscussions,
    getDiscussionByUsername:getDiscussionByUsername,
    getDiscussionById:getDiscussionById
}