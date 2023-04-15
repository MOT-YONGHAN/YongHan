const storeDao = require("../models/storeDao");
// 메인페이지 기본
const mainPageList = async (sort) => {
  return await storeDao.mainPageList(sort);
};

// 메인페이지 카테고리

const mainPageCategory = async (categoryId, sort) => {
  return storeDao.storeListForMainPage(categoryId, sort);
};

const storeDetails = async (storeId) => {
  const result = await storeDao.storeDetails(storeId);
  return result;
};

module.exports = {
  mainPageList,
  mainPageCategory,
  storeDetails,
};
