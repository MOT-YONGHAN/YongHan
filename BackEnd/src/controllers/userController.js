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

  if (!kakaoToken || !socialTypeId) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;

    throw error;
  }

  const accessToken = await userService.kakaoLogin(kakaoToken, socialTypeId);

  return res.status(200).json({ accessToken: accessToken });
});

// const naverLogin = catchAsync(async (req, res) => {});

// const userInfo = catchAsync(async (req, res) => {});

module.exports = {
  signup,
  signin,
  kakaoLogin,
};
