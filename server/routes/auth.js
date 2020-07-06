const express = require('express');
const router = express.Router();
require('dotenv').config()
const ensureLoggedIn = require("../middleware/auth")
 const ensureCorrectUser = require("../middleware/auth")



//ROUTE TO CHECK IF THE PERSON SCCESSING THIS ROUTE HAS ACCESS
router.post("/secret", ensureLoggedIn, async function (req, res, next) {
  try {
    return res.json({ message: "Authorized User" });
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized User" });
  }
});


//ROUTE TO ENSURE USER ACCESSING ROUTE IS CORRECT
router.get("/:email", ensureCorrectUser, async function (req, res, next) {
    try {
      return res.json({ message: "Authorized User" });
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized User" });
    }
});


module.exports = router;
