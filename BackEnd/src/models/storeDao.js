const { appDataSource } = require("./appDataSource");

const storeList = async () => {};

const storeDetails = async (storeId) => {
  return await appDataSource.query(
    `
    SELECT
      c.category_id        AS category,
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
