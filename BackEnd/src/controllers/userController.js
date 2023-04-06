const userService = require("../services/userService");
const { catchAsync } = require("../utils/catchAsync");
const detectError = require("../utils/detectError");

const signup = catchAsync(async (req, res) => {
  const { name, nickname, email, password, socialId } = req.body;

  if (!name || !nickname || !email || !password || !socialId)
    detectError("KEY_ERROR", 400);

  await userService.signup(name, nickname, email, password, socialId);

  return res.status(201).json({ message: "USER_CREATED!" });
});

const signin = catchAsync(async (req, res) => {
  const { email, password, socialId } = req.body;

  if (!email || !password || !socialId) detectError("KEY_ERROR", 400);

  jwtToken = await userService.signin(email, password, socialId);

  return res.status(200).json({ accessToken: jwtToken });
});

const kakaoLogin = catchAsync(async (req, res) => {
  const kakaoToken = req.headers.authorization;
  const { socialId } = req.body;

  if (!kakaoToken || !socialId) detectError("KEY_ERROR", 401);

  const accessToken = await userService.kakaoLogin(kakaoToken, socialId);

  return res.status(200).json({ accessToken: accessToken });
});

// const naverLogin = catchAsync(async (req, res) => {});

// const userInfo = catchAsync(async (req, res) => {});

module.exports = {
  signup,
  signin,
  kakaoLogin,
};
