function HomeController(req,res){
    res.status(200).send('<h1> Welcome to Home Page</h1>');
}

function AboutController(req,res){
    res.status(200).send('<h1> This is about us page</h1>');
}

module.exports = { HomeController, AboutController };
