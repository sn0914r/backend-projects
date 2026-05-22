import type { Request, Response } from "express";
import { registerUser } from "../services/registerUser";
import { loginUser } from "../services/loginUser";
import { refreshToken } from "../services/refreshToken";
import { logoutUser } from "../services/logoutUser";

export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const name = req.body.name || null;

  const { accessToken, refreshToken } = await registerUser(
    email,
    password,
    name,
  );

  res.cookie("refresh_token", refreshToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
  });

  res.status(200).json({
    success: true,
    message: "Registration Successful",
    data: { accessToken },
  });
};

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { accessToken, refreshToken } = await loginUser(email, password);

  res.cookie("refresh_token", refreshToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
  });

  res.status(200).json({
    success: true,
    message: "Login Successful",
    data: { accessToken },
  });
};

export const refreshController = async (req: Request, res: Response) => {
  const refreshToken_ = req.cookies.refresh_token;
  const accessToken = await refreshToken(refreshToken_);

  res.status(200).json({
    success: true,
    message: "Access Token generated",
    data: accessToken,
  });
};

export const logoutController = async (req: Request, res: Response) => {
  const refreshToken = req.cookies.refresh_token;
  await logoutUser(refreshToken);

  res.clearCookie("refresh_token");
  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};
