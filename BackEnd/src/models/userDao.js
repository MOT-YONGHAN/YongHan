const { appDataSource } = require("./appDataSource");

const SocialTypeId = Object.freeze({
  LOCAL: 1,
  KAKAO: 2,
  NAVER: 3,
});

// local - user인지 확인
const getUserId = async (email) => {
  return await appDataSource.query(
    `
    SELECT
      id
    FROM
      users
    WHERE
      email = ?
    `,
    [email]
  );
};

// user - password 생성

const getHashedPassword = async (email) => {
  const [hashedPassword] = await appDataSource.query(
    `
    SELECT
      password
    FROM
      users
    WHERE
      email = ?
    `,
    [email]
  );
  return hashedPassword;
};

// local - user 생성
const localCreateUser = async (
  name,
  nickname,
  email,
  hashedPassword,
  socialTypeId
) => {
  return await appDataSource.query(
    `
    INSERT INTO users (
      name,
      nickname,
      email,
      password,
      social_type_id
    ) VALUES (
      ?,
      ?,
      ?,
      ?,
      ${SocialTypeId.LOCAL}
    )`,
    [name, nickname, email, hashedPassword, socialTypeId]
  );
};

const checkUserById = async (sociaId, socialTypeId) => {
  const [userInfo] = await appDataSource.query(
    `
    SELECT
      id
    FROM
      users
    WHERE
      social_id = ? AND social_type_id = ?
    `,
    [sociaId, socialTypeId]
  );
  return userInfo;
};

const createUser = async (
  socialId,
  k_name,
  k_nickname,
  k_email,
  socialTypeId
) => {
  console.log("dao", k_name, k_nickname, k_email);
  return await appDataSource.query(
    `
    INSERT INTO users (
      social_id,
      name,
      nickname,
      email,
      social_type_id
    ) VALUES (
      ?,
      ?,
      ?,
      ?,
      2
    )`,
    [socialId, k_name, k_nickname, k_email, socialTypeId]
  );
};

module.exports = {
  getUserId,
  getHashedPassword,
  checkUserById,
  createUser,
  localCreateUser,
};