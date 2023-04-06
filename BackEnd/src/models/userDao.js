const { appDataSource } = require("./appDataSource");

const checkUserById = async (sociaId, socialtypeId) => {
  const [userInfo] = await appDataSource.query(
    `
    SELECT
      id
    FROM
      users
    WHERE
      social_id = ? AND social_type_id = ?
    `,
    [sociaId, socialtypeId]
  );
  return userInfo;
};

const createUser = async (name, nickname, email, hashedPassword, socialId) => {
  return await appDataSource.query(
    `
    INSERT INTO users (
      name,
      nickname,
      email,
      password,
      socialId
    ) VALUES (
      ?,
      ?,
      ?,
      ?,
      1
    )`,
    [name, nickname, email, hashedPassword, socialId]
  );
};

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
module.exports = {
  checkUserById,
  createUser,
  getHashedPassword,
  getUserId,
};
