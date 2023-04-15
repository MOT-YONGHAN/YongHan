const storeService = require("../services/storeService");
const { catchAsync } = require("../utils/detectError");

// 메인페이지
const mainPage = catchAsync(async (req, res) => {
  const { categoryId, sort } = req.query;

  let result;
  if (!categoryId) {
    // 메인페이지 - 기본
    result = await storeService.mainPageList(sort || "new");
  } else {
    // 메인페이지 - 카테고리
    result = await storeService.mainPage(categoryId, sort || "new");
  }

  return res.status(200).json(result);
});

const storeDetails = catchAsync(async (req, res) => {
  const { storeId } = req.params;

  const result = await storeService.storeDetails(storeId);

  return res.status(200).json(result);
});

module.exports = {
  mainPage,
  storeDetails,
};
