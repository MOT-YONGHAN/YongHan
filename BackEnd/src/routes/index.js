const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const searchRouter = require("./searchRouter");

router.use("/auth", userRouter.router);
router.use("/search", searchRouter.router);

module.exports = router;
