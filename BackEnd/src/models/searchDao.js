const { appDataSource } = require("./appDataSource");

const sortMethod = Object.freeze({
  new: "s.created_at DESC", // 최신순
  old: "s.created_at ASC", // 과거순
  mostReviews: "review_count DESC", // 리뷰 많은 순
  fewReviews: "review_count ASC", // 리뷰 적은 순
});

const search = async (search, sort) => {
  return appDataSource.query(
    `
    SELECT
      s.id                          AS storeId,
      s.name                        AS name,
      s.category_id                 AS categoryId,
      s.address                     AS address,
      s.price                       AS price,
      COUNT(r.id)                   AS review_count
    FROM
      stores s
    LEFT JOIN reviews r ON s.id = r.store_id
    WHERE
      s. name LIKE CONCAT('%', ?, '%')
    GROUP BY
      s.id
    ORDER BY ${sortMethod[sort]}
    `,
    [`%${search}%`]
  );
};

module.exports = { search };
