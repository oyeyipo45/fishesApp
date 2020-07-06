const jwt = require('jsonwebtoken')
require('dotenv').config()

//HIDDEN SECRET FOR PASSWORD HASHING
const secret = process.env.SECRET


//MIDDLEWARE TO ENSURE THE USER USING THIS ROUTE IS LOGGED IN
const ensureLoggedIn = (req, res, next) => {
    try {
        //GET TOKEN
      const authHeaderValue = req.headers.authorization;
      const authHeaderString = authHeaderValue.split(" ")[1];
     
      

      //VERIFY TOKEN
      const token = jwt.verify(authHeaderString, secret);
    
      return res.send({message: "user is logged in"})
      
      
      // return next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized Logged in user" });
    }
}



//MIDDLEWARE TO ENSURE THE USER USING THIS ROUTE IS CORRECT
const ensureCorrectUser = (req, res, next) => {
  try {
    const authHeaderValue = req.headers.authorization.split(" ")[1];
    const token = jwt.verify(authHeaderValue, secret);
    if (token.email === req.params.email) {
      return next();
    } else {
      return res.status(401).json({ message: "unauthorized correct User 1" });
    }
  } catch (error) {
    return res.status(401).json({ message: "unauthorized correct User 2" });
  }
}


module.exports = ensureLoggedIn;
module.exports = ensureCorrectUser;