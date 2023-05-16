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

// 메인, 상세 페이지 - 좋아요 유저
const userlike = catchAsync(async (req, res) => {
  const { userId, storeId } = req.body;

  await storeService.userlike(userId, storeId);

  return res.status(200).json({ message: "좋아요!" });
});

// 상세페이지 - 기본
const storeDetails = catchAsync(async (req, res) => {
  const { storeId } = req.params;

  const result = await storeService.storeDetails(storeId);

  return res.status(200).json(result);
});

module.exports = {
  mainPage,
  userlike,
  storeDetails,
};
