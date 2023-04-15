const { appDataSource } = require("./appDataSource");

const mainPageSortMethod = Object.freeze({
  new: "created_at ASC",
  old: "created_at DESC",
});

const mainPageList = async (sort) => {
  return appDataSource.query(
    `
    SELECT
      s.category_id AS category,
      s.name AS name,
      s.address AS address
    FROM
      stores s
    ORDER BY ${mainPageSortMethod[sort]}
    `
  );
};

const mainPageCategory = async (categoryId, sort) => {
  return appDataSource.query(
    `
    SELECT
      s.category_id AS category,
      s.name AS name,
      s.address AS address
    FROM
      stores s
    WHERE s.category_id = ?
    ORDER BY ${mainPageSortMethod[sort]}
    `
  );
};

const storeDetails = async (storeId) => {
  return await appDataSource.query(
    `
    SELECT
      s.category_id        AS category,
      s.name               AS name,
      s.address            AS address,
      s.price              AS price,
      s.description        AS description
    FROM
      stores s
    JOIN
      categories c
    ON
      s.category_id = c.id
    WHERE s.id = ?
    `,
    [storeId]
  );
};

module.exports = { mainPageList, mainPageCategory, storeDetails };
