const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const searchRouter = require("./searchRouter");
const storeRouter = require("./storeRouter");

router.use("/auth", userRouter.router);
router.use("/search", searchRouter.router);
router.use("/store", storeRouter.router);

module.exports = router;
