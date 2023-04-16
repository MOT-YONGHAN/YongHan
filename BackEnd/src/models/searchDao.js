const { appDataSource } = require("./appDataSource");

const search = async (search, sort) => {
  return appDataSource.query(
    `
    SELECT
      s.category_id AS category,
      s.name AS name,
      s.address AS address,
      s.price AS price,
      COUNT(r.id) AS review_count
    FROM
      store s
    LEFT JOIN review r ON s.id = r.store_id
    WHERE
      s. name LIKE = CONCAT('%', ?, '%')
    GROUP BY
      s.id
    ORDER BY ${}
    `,
    [`%${search}%`]
  );
};

module.exports = { search };
