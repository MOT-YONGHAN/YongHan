const express = require("express");
const router = express.Router();

const storeRouter = require("./storeRouter");

router.use("/store", storeRouter.router);

module.exports = router;
