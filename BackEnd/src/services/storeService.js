const storeDao = require("../models/storeDao");

const storeList = async () => {};

const storeDetails = async (storeId) => {
  const details = await storeDao.storeDetails(storeId);
  return details;
};

module.exports = {
  storeList,
  storeDetails,
};
