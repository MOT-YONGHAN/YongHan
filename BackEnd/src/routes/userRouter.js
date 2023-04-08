const express = require("express");
const router = express.Router();
const { validateToken } = require("../utils/auth");

const userController = require("../controllers/usercontroller");

router.post("/signup", userController.signup);
router.post("/signin", userController.signin);
router.post("/kakao", userController.kakaoLogin);
router.post("/naver", userController.naverLogin);
// router.get("/userInfo", validateToken, userController.userInfo);

module.exports = {
  router,
};
