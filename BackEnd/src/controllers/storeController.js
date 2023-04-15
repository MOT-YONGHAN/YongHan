const storeService = require("../services/storeService");
const { catchAsync } = require("../utils/detectError");
const { detectError } = require("../utils/detectError");

// 메인페이지 기본
const mainPageList = catchAsync(async (req, res) => {
  const { sort } = req.query;

  if (!sort) {
    const sort = "new";
    const result = await storeService.mainPageList(sort);
    return res.status(200).json({ data: result });
  }
  const result = await storeService.mainPageList(sort);

  return res.status(200).json({ data: result });
});

// 메인페이지 카테고리 선택
const mainPageCategory = catchAsync(async (req, res) => {
  const { categoryId, sort } = req.query;

  if (!sort) {
    const sort = "new";
    const result = await storeService.mainPageCategory(categoryId, sort);
    return res.status(200).json({ data: result });
  }
  const result = await storeService.mainPageCategory(categoryId, sort);

  return res.status(200).json({ data: result });
});

const storeDetails = catchAsync(async (req, res) => {
  const { storeId } = req.query;
  console.log("controller", req.params);
  const result = await storeService.storeDetails(storeId);

  return res.status(200).json({ data: result });
});

module.exports = {
  mainPageList,
  mainPageCategory,
  storeDetails,
};
