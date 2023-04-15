const storeDao = require("../models/storeDao");

// 메인페이지 기본
const mainPageList = async (sort) => {
  return await storeDao.mainPageList(sort || "new");
};

// 메인페이지 카테고리
const mainPage = async (categoryId, sort) => {
  return storeDao.mainPageCategory(categoryId, sort || "new");
};

const storeDetails = async (storeId) => {
  return await storeDao.storeDetails(storeId);
};

module.exports = {
  mainPageList,
  mainPage,
  storeDetails,
};
