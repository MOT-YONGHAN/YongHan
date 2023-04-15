const express = require("express");
const router = express.Router();

const userController = require("../controllers/usercontroller");
const searchController = require("../controllers/searchController");

router.post("/signup", userController.signup);
router.post("/", searchController.search);

module.exports = {
  router,
};
