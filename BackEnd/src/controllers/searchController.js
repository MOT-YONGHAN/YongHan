const searchService = require("../services/searchService");
const { catchAsync } = require("../utils/error");

const search = catchAsync(async (req, res) => {
  const { search, sort } = req.query;

  const result = await searchService.search(search, sort || "new");
  return res.status(200).json(result);
});

module.exports = {
  search,
};
