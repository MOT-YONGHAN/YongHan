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

// 네이버 로그인
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

// 실험중
// const naverLogin = async (code, state) => {
//   const naver_api_url = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&response_type=code&client_id=${Naver.client_id}&client_secret=${Naver.client_secret}&redirect_uri=${Naver.redirectURI}&code=${code}&state=${state}`;
//   const options = {
//     url: naver_api_url,
//     headers: {
//       "X-Naver-Client-Id": Naver.client_id,
//       "X-Naver-Client-Secret": Naver.client_secret,
//     },
//   };
//   const result = await request.get(options);
//   const token = JSON.parse(result).access_token;

//   const info_options = {
//     url: "https://openapi.naver.com/v1/nid/me",
//     headers: { Authorization: "Bearer " + token },
//   };

//   const info_result = await request.get(info_options);

//   const info_result_json = JSON.parse(info_result).response;

//   if (!info_result_json) {
//     const error = new Error("NAVER_TOKEN_ERROR");
//     error.statusCode = 400;

//     throw error;
//   }

//   // const { data } = result;
//   // const socialId = data.response.id;
//   // const name = data.response.name;
//   // const nickname = data.response.nickname;
//   // const email = data.response.email;
//   // const socialTypeId = SocialTypeId.NAVER;

//   // const userId = await userDao.checkUserById(socialId);

//   // if (!userId) {
//   //   const newUser = await userDao.createUser(
//   //     socialId,
//   //     name,
//   //     nickname,
//   //     email,
//   //     socialTypeId
//   //   );

//   //   return (accessToken = jwt.sign(
//   //     { userId: newUser.insertId },
//   //     process.env.JWT_SECRET
//   //   ));
//   // }
//   // return (accessToken = jwt.sign({ userId: userId }, process.env.JWT_SECRET));
// };

// const userInfo = async () => {};

module.exports = {
  signup,
  signin,
  kakaoLogin,
  naverLogin,
};
