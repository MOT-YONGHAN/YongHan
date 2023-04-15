const searchService = require("../services/searchService");
const { catchAsync } = require("../utils/error");
const detectError = require("../utils/error");

const search = catchAsync(async (req, res) => {});

module.exports = {
  search,
};
