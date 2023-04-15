const express = require("express");
const router = express.Router();
const storeController = require("../controllers/storeController");

router.get("/", storeController.mainPage); // 메인페이지 - 기본
router.get("/:categoryId", storeController.mainPage); // 메인페이지 - 카테고리 선택
router.get("/detail/:storeId", storeController.storeDetails);

module.exports = {
  router,
};
