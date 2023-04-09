const express = require("express");
const router = express.Router();
const storeController = require("../controllers/storeController");

router.get("/", storeController.storeList);
router.get("/detail", storeController.storeDetails);

module.exports = {
  router,
};
