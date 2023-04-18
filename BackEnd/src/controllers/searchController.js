const searchService = require("../services/searchService");
const { catchAsync } = require("../utils/error");
const { detectError } = require("../utils/error");

const search = catchAsync(async (req, res) => {
  const { search, sort } = req.query;
  console.log("contorller", search);
  if (!search) detectError("NO_KEYWORD", 400);

  return await searchService.search(search, sort || "new");
});

module.exports = {
  search,
};
