const storeService = require("../services/storeService");
const { catchAsync } = require("../utils/detectError");

const storeList = catchAsync(async (req, res) => {});

const storeDetails = catchAsync(async (req, res) => {
  const { storeId } = req.query;

  const storeDetails = await storeService.storeDetails(storeId);

  return res.status(200).json({ data: storeDetails });
});

module.exports = {
  storeList,
  storeDetails,
};
