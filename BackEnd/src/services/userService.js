const userDao = require("../models/userDao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const detectError = require("../utils/error");
// const { request } = require("express");

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

  if (!pwValidation.test(password)) {
    const error = new Error("PASSWORD_IS_NOT_VALID");
    error.statusCode = 409;

    throw error;
  }

  const saltRounds = 12;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const createUser = await userDao.localCreateUser(
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

  if (!compare) {
    const error = new Error("PASSWORD_DOES_NOT_MATCH");
    error.statusCode = 400;

    throw error;
  }

  const userData = await userDao.getUserId(email);

  const payLoad = { userData: userData.userId };
  const jwtToken = jwt.sign(payLoad, process.env.JWT_SECRET);

  return jwtToken;
};

const kakaoLogin = async (kakaoToken) => {
  const result = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: {
      Authorization: `Bearer ${kakaoToken}`,
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });

  if (!result) {
    const error = new Error("KAKAO_TOKEN_ERROR");
    error.statusCode = 400;

    throw error;
  }

  const { data } = result;
  const socialId = data.id;
  const name = data.properties.name;
  const nickname = data.properties.nickname;
  const email = data.kakao_account.email;
  const socialTypeId = SocialTypeId.KAKAO;

  const userId = await userDao.checkUserById(socialId);

  if (!userId) {
    const newUser = await userDao.createUser(
      socialId,
      name,
      nickname,
      email,
      socialTypeId
    );

    return (accessToken = jwt.sign(
      { userId: newUser.insertId },
      process.env.JWT_SECRET
    ));
  }
  return (accessToken = jwt.sign({ userId: userId }, process.env.JWT_SECRET));
};

const naverLogin = async (naverToken) => {
  const result = await axios.get("https://openapi.naver.com/v1/nid/me", {
    headers: {
      Authorization: `Bearer ${naverToken}`,
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });

  if (!result) {
    const error = new Error("NAVER_TOKEN_ERROR");
    error.statusCode = 400;

    throw error;
  }
  console.log("service", result);
  const { data } = result;
  const socialId = data.response.id;
  const name = data.response.name;
  const nickname = data.response.nickname;
  const email = data.response.email;
  const socialTypeId = SocialTypeId.NAVER;

  const userId = await userDao.checkUserById(socialId);

  if (!userId) {
    const newUser = await userDao.createUser(
      socialId,
      name,
      nickname,
      email,
      socialTypeId
    );

    return (accessToken = jwt.sign(
      { userId: newUser.insertId },
      process.env.JWT_SECRET
    ));
  }
  return (accessToken = jwt.sign({ userId: userId }, process.env.JWT_SECRET));
};

// const userInfo = async () => {};

module.exports = {
  signup,
  signin,
  kakaoLogin,
  naverLogin,
};
