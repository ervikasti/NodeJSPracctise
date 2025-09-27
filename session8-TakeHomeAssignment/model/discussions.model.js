const mongoose = require('mongoose');

const discussionsModel = mongoose.Schema({
    title:{
        type : String,
        require : true,
        maxLength : 150
    },
    author:{
        type: String,
        require:true,
        immutable:true,
    },
    content:{
        type:String,
        default:"",
    },

},{ timestamps: true })

module.exports = mongoose.model("Discussions", discussionsModel);