import jwt from "jsonwebtoken";
import AppError from "../error/AppError";

export const generateAccessToken = (payload: Record<string, any>) => {
  const accessKey = process.env.ACCESS_KEY;

  if (!accessKey) {
    throw new AppError(
      "ACCESS_KEY environment variable is not set",
      500,
      "MISSING_ENV_VAR",
    );
  }

  const accessToken = jwt.sign(payload, accessKey, {
    expiresIn: "15m",
  });

  return accessToken;
};

export const generateRefreshToken = (payload: Record<string, any>) => {
  const refreshKey = process.env.REFRESH_KEY;

  if (!refreshKey) {
    throw new AppError(
      "REFRESH_KEY environment variable is not set",
      500,
      "MISSING_ENV_VAR",
    );
  }

  const refreshToken = jwt.sign(payload, refreshKey, {
    expiresIn: "7d",
  });

  return refreshToken;
};
