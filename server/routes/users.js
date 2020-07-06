const express = require("express");
const router = express.Router();
const db = require("../db/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRET;

//@get Users
//@access public
// localhost/user
router.get("/", async function (req, res, next) {
  try {
    const results = await db.query(`SELECT * FROM users`);
    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});


//@POST Users
//@access public
// localhost/user
//CREATING USER FOR THE FIRST TIME
router.post("/", async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const result = await db.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [req.body.name, req.body.email, hashedPassword]
    );
    return res.json(result.rows[0]);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "This email has already been used !!! " });
  }
});


//ROUTE TO CHECK IF REGISTERED THEN LOGIN AND GET TOKEN
router.post("/login", async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    //VALIDATION
    if (!name || !email || !password) {
      return res.status(400).json({ message: "please enter all fields" });
    }

    const foundUser = await db.query(
      "SELECT * FROM users WHERE email = $1 LIMIT 1",
      [req.body.email]
    );
    if (foundUser.rows.length === 0) {
      return res.json({ message: "Invalid Email" });
    }

    const hashedPassword = await bcrypt.compare(
      req.body.password,
      foundUser.rows[0].password
    );

    if (hashedPassword === false) {
      return res.json({ message: "Invalid Password" });
    }

    // creating a token  using the sign() method
    const token = jwt.sign({ email: foundUser.rows[0].email }, secret, {
      expiresIn: 60 * 60,
    });

    return res.json({ token });

    //  return res.json({ message: "Logged In!" });
  } catch (error) {
    return res.json(error);
  }
});



router.post("/secret", async(req, res, next) => {
  try {
      //GET TOKEN
    const authHeaderValue = req.headers.authorization;
    const authHeaderString = authHeaderValue.split(" ")[1];
   
    
   

    //VERIFY TOKEN
    const token = jwt.verify(authHeaderString, secret);
    console.log(token, "token out");
     //CHECK FOR TOKEN
     if(!token) res.status(401).json({message: "NoToken, Autorization Denied"})
  
    return res.send({message: "user is logged in"})
    
    
    
    // return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized Logged in user" });
  }
})


module.exports = router;
