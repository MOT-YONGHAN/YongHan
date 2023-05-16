const storeDao = require("../models/storeDao");

// 메인페이지 기본
const mainPageList = async (sort) => {
  return await storeDao.mainPageList(sort || "new");
};

// 메인페이지 좋아요/유저
const userlike = async (userId, storeId) => {
  return await storeDao.userlike(userId, storeId);
};

// 메인페이지 카테고리
const mainPage = async (categoryId, sort) => {
  return storeDao.mainPageCategory(categoryId, sort || "new");
};

// 상세페이지
const storeDetails = async (storeId) => {
  return await storeDao.storeDetails(storeId);
};

module.exports = {
  mainPageList,
  userlike,
  mainPage,
  storeDetails,
};
