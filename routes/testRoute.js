const express = require("express");
const { testController } = require("../controllers/testController");

//roter object
const router = express.Router()

//rotes
router.get("/", testController)

//export
module.exports = router;