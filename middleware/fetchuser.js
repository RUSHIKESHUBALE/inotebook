var jwt = require('jsonwebtoken');
const JWT_secret = "Amisha";


// This function is to validate the token and if valid then pass the user data in req object
const fetchuser = (req, res, next)=>{
    
    const token = req.header("auth-token");      // New header is added 

    if (!token){
        res.status(401).send({"error":"Please authenticate using valid token"});
    }
    try {
        const data = jwt.verify(token, JWT_secret);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({"error" : error.message})
    }

}


module.exports = fetchuser;