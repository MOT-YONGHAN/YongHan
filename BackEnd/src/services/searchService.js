const searchDao = require("../models/searchDao");
const detectError = require("../utils/error");

const search = async (search, sort) => {
  return await searchDao.search(search, sort);
};

module.exports = {
  search,
};
