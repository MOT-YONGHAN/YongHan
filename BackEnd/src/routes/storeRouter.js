const express = require("express");
const router = express.Router();
const storeController = require("../controllers/storeController");

router.get("/", storeController.mainPageList);
router.get("/:categoryId", storeController.mainPageCategory);
router.get("/:storeId", storeController.storeDetails);

module.exports = {
  router,
};
