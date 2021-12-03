const express = require("express")
const router = express.Router();
const controller = require("../controllers/vmController")

router
    .route("")
    .get(controller.getAllVm)
    .post(controller.addVm)


router
    .route("/byname")
    .post(controller.existingVm)

router
    .route("/byip")
    .post(controller.getVmByIp)

router
    .route("/update")
    .post(controller.updateState)

module.exports = router;