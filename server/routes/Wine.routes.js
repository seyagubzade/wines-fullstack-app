const express = require("express");
const router = express.Router();
const { WineController } = require("../controllers/Wine.controller");

router.get("/", WineController.getAll);
router.get("/:id", WineController.getById);
router.post("/", WineController.addNew);
router.delete("/:id", WineController.deleteById);

module.exports = router;
