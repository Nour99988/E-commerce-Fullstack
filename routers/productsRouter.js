const express = require("express");
const productsCtrl = require("../controllers/productsCtrl");

const router = express.Router();

router.get("/", productsCtrl.getAll);
router.get("/:id", productsCtrl.getOne);
router.post("/", productsCtrl.addone);
router.put("/", productsCtrl.editone);
router.delete("/", productsCtrl.delete);

module.exports = router;
