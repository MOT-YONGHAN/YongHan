const { detectError } = require("../utils/detectError");
const { appDataSource } = require("./appDataSource");

const mainPageSortMethod = Object.freeze({
  new: "s.created_at DESC", // 최신순
  old: "s.created_at ASC", // 과거순
  mostReviews: "review_count DESC", // 리뷰 많은 순
  fewReviews: "review_count ASC", // 리뷰 적은 순
});

// 메인페이지 - 기본
const mainPageList = async (sort) => {
  return appDataSource.query(
    `
    SELECT
      s.name                   AS name,
      s.address                AS address,
      r.score                  AS score,
      COUNT(r.id)              AS review_count,
      s.created_at
    FROM
      stores s
    LEFT JOIN reviews r        ON s.id = r.store_id
    GROUP BY s.id, r.score
    ORDER BY ${mainPageSortMethod[sort]}
    `
  );
};

// 메인페이지 - 카테고리 선택
const mainPageCategory = async (categoryId, sort) => {
  try {
    const result = await appDataSource.query(
      `
      SELECT
        s.name                   AS name,
        s.address                AS address,
        r.score                  AS score,
        COUNT(r.id)              AS review_count,
        s.created_at
      FROM
        stores s
      LEFT JOIN reviews r        ON s.id = r.store_id
      WHERE s.category_id = ?
      GROUP BY s.id, r.score
      ORDER BY ${mainPageSortMethod[sort]}
      `,
      [categoryId]
    );
    return result;
  } catch (error) {
    detectError("SERVER_ERROR", 400);
  }
};

// 상세페이지
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
    JOIN categories c      ON s.category_id = c.id
    WHERE s.id = ?
    `,
    [storeId]
  );
};

module.exports = { mainPageList, mainPageCategory, storeDetails };
