const userService = require("../services/userService");
const { catchAsync } = require("../utils/error");
const detectError = require("../utils/error");

// local - 회원가입
const signup = catchAsync(async (req, res) => {
  const { name, nickname, email, password, socialTypeId } = req.body;

  if (!name || !nickname || !email || !password || !socialTypeId) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;

    throw error;
  }
  await userService.signup(name, nickname, email, password, socialTypeId);

  return res.status(201).json({ message: "USER_CREATED!" });
});

// local - 로그인
const signin = catchAsync(async (req, res) => {
  const { email, password, socialTypeId } = req.body;

  if (!email || !password || !socialTypeId) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;

    throw error;
  }

  jwtToken = await userService.signin(email, password, socialTypeId);

  return res.status(200).json({ accessToken: jwtToken });
});

// 카카오 로그인
const kakaoLogin = catchAsync(async (req, res) => {
  const kakaoToken = req.headers.authorization;
  // const { socialTypeId } = req.body;

  if (!kakaoToken) {
    const error = new Error("NEED_KAKAO_TOKEN");
    error.statusCode = 400;

    throw error;
  }

  const kakao_accessToken = await userService.kakaoLogin(kakaoToken);

  return res.status(200).json({ accessToken: kakao_accessToken });
});

const naverLogin = catchAsync(async (req, res) => {
  const naverToken = req.headers.authorization;

  if (!naverToken) {
    const error = new Error("NEED_NEVER_TOKEN_AND");
    error.statusCode = 400;

    throw error;
  }
  const naver_accessToken = await userService.naverLogin(naverToken);

  return res.status(200).json({ accessToken: naver_accessToken });
});

// const userInfo = catchAsync(async (req, res) => {});

module.exports = {
  signup,
  signin,
  kakaoLogin,
  naverLogin,
};
