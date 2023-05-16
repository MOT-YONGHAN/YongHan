const { detectError } = require("../utils/detectError");
const { appDataSource } = require("./appDataSource");

const sortMethod = Object.freeze({
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
      AVG(r.score)             AS avg_score,
      COUNT(r.id)              AS review_count,
      COUNT(l.id)              AS likes_count
    FROM
      stores s
    LEFT JOIN reviews r        ON s.id = r.store_id
    LEFT JOIN likes l          ON s.id = l.store_id
    GROUP BY s.id, r.score
    ORDER BY ${sortMethod[sort]}
    `
  );
};

// 메인페이지 - 카테고리 선택
const mainPageCategory = async (categoryId, sort) => {
  try {
    const result = await appDataSource.query(
      `
      SELECT
        s.category_id            AS category,
        s.name                   AS name,
        s.address                AS address,
        r.score                  AS score,
        COUNT(r.id)              AS review_count,
        COUNT(l.id)              AS likes_count
      FROM
        stores s
      JOIN categories c      ON s.category_id = c.id
      LEFT JOIN reviews r        ON s.id = r.store_id
      LEFT JOIN likes l          ON s.id = l.store_id
      WHERE s.category_id = ?
      GROUP BY s.id, r.score
      ORDER BY ${sortMethod[sort]}
      `,
      [categoryId]
    );
    return result;
  } catch (error) {
    detectError("SERVER_ERROR", 400);
  }
};

// 메인페이지 - 좋아요 유저
const userlike = async (userId, storeId) => {
  return appDataSource.query(
    `
    INSERT INTO likes(
      user_id,
      store_id
    )
    VALUES (?, ?)
    `,
    [userId, storeId]
  );
};

// 상세페이지
const storeDetails = async (storeId) => {
  return await appDataSource.query(
    `
    SELECT
      s.category_id                      AS category,
      s.name                             AS name,
      s.address                          AS address,
      s.price                            AS price,
      s.description                      AS description,
      GROUP_CONCAT(r.description)        AS review_description,
      GROUP_CONCAT(r.score)              AS score
    FROM
      stores s
    JOIN categories c                    ON s.category_id = c.id
    LEFT JOIN reviews r                  ON s.id = r.store_id
    WHERE s.id = ?
    GROUP BY s.id
    `,
    [storeId]
  );
};

module.exports = {
  mainPageList,
  userlike,
  mainPageCategory,
  storeDetails,
};
