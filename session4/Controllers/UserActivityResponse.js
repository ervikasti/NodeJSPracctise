const userData = require('../userData');

function UserData(req,res){
    res.json(userData);
}

function UserByGender(req,res){
    const params = req.query;
    const filteredData = userData.data.filter(user => user.gender === params.gender);
    res.status(200).json({data:filteredData, size: filteredData.length});
}

function UserByName(req,res){
    const params = req.params;
    const firstName = params.firstName;
    const filteredData = userData.data.filter(user => user.name.first.toLowerCase() === firstName.toLowerCase());
    if(filteredData.length > 0){
        res.status(200).json({data:filteredData, size: filteredData.length});
    }else{
        res.status(404).send(`User with first name ${firstName} not found`);
    }
}

module.exports = { UserData, UserByGender, UserByName };
