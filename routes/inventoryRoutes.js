const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const {
    createInventoryController,
    getInventoryController,
    getDonarsController,
    getHospitalController,
    getOrganisationController,
    getOrganisationForHospitalController,
    getInventoryHospitalController,
    getRecentInventoryController
} = require('../controllers/inventoryController')

const router = express.Router()

//routes
//add inventory || POST
router.post("/create-inventory", authMiddleware, createInventoryController)

//get all blood records
router.get("/get-inventory", authMiddleware, getInventoryController)

//get latest 5 blood records
router.get("/get-recent-inventory", authMiddleware, getRecentInventoryController)

//add inventory || POST
router.post("/get-inventory-hospital", authMiddleware, getInventoryHospitalController)

//get all donar records
router.get("/get-donars", authMiddleware, getDonarsController)

//get hospital records
router.get("/get-hospitals", authMiddleware, getHospitalController)

//get organisation records
router.get("/get-organisation", authMiddleware, getOrganisationController)

//get organisation records
router.get("/get-organisation-for-hospital", authMiddleware, getOrganisationForHospitalController)

module.exports = router