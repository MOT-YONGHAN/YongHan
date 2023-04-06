const userDao = require("../models/userDao");
const bcrypt = require("bcrypt");
const jwt = require("jswonwebtoken");
const axios = require("axios");
const detectError = require("../utils/detectError");

const SocialTypeId = Object.freeze({
  LOCAL: 1,
  KAKAO: 2,
  NAVER: 3,
});

// LOCAL 회원가입
const signup = async (name, nickname, email, password, socialTypeId) => {
  const pwValidation = new RegExp(
    "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})"
  );

  if (!pwValidation.test(password)) detectError("PASSWORd_IS_NOT_VALID", 409);

  const saltRounds = 12;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const createUser = await userDao.createUser(
    name,
    nickname,
    email,
    hashedPassword,
    socialTypeId
  );

  return createUser;
};

const signin = async (email, password) => {
  const hashedPassword = await userDao.getHashedPassword(email);
  const compare = await bcrypt.hash(password, hashedPassword);

  if (!compare) detectError("PASSWORD_DOES_NOT_MATCH", 401);

  const userData = await userDao.checkUserById(email);

  const payLoad = { userData: userData.userId };
  const jwtToken = jwt.sign(payLoad, process.env.JWT_SECRET);

  return jwtToken;
};

const kakaoLogin = async (kakaoToken, socialId) => {
  const result = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: {
      Authorization: `Bearer ${kakaoToken}`,
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });

  if (!result) {
    detectError("TOKEN_ERROR", 400);
  }

  const { data } = result;
  const socialId = data.id;
  const name = data.properties.name;
  const nickname = data.properties.nickname;
  const email = data.properties.email;
  const socialTypeId = SocialTypeId.KAKAO;

  const userId = await userDao.checkUserById(socialId, socialTypeId);

  if (!userId) {
    const newUser = await userDao.createUser(
      socialId,
      name,
      nickname,
      email,
      SocialTypeId
    );

    return (accessToken = jwt.sign(
      { userId: newUser.insertId },
      process.env.JWT_SECRET
    ));
  }
  return (accessToken = jwt.sign({ userId: userId }, process.env.JWT_SECRET));
};

const naverLogin = async () => {};

// const userInfo = async () => {};

module.exports = {
  signup,
  signin,
  kakaoLogin,
  naverLogin,
};
