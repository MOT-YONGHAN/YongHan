const express = require("express");
const router = express.Router();
const storeController = require("../controllers/storeController");

router.get("/", storeController.mainPage); // 메인페이지 - 기본
router.get("/:categoryId", storeController.mainPage); // 메인페이지 - 카테고리 선택
router.post("/", storeController.userlike); // 메인페이지 - 좋아요/유저
router.post("/:categoryId", storeController.userlike); // 메인페이지 - 좋아요/유저
router.get("/detail/:storeId", storeController.storeDetails); // 상세 페이지 - 기본
router.post("/detail/:storeId", storeController.userlike); // 상세페이지 - 좋아요/유저

module.exports = {
  router,
};
