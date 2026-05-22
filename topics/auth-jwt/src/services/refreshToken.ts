import jwt from "jsonwebtoken";
import AppError from "../error/AppError";
import { pool } from "../clients/postgres";
import { generateAccessToken } from "../utils/generateTokens";
import crypto from "crypto";

export type RefreshToken = {
  userId: string;
  sessionId: number | string;
};

export const refreshToken = async (refreshToken: string) => {
  if (!refreshToken) throw new AppError("NO token sent", 400, "UNAUTHORIZED");

  const refreshKey = process.env.REFRESH_KEY;
  if (!refreshKey)
    throw new AppError(
      "REFRESH_TOKEN env variable is not set",
      400,
      "BAD_REQUEST_ERROR",
    );

  const decode = jwt.verify(refreshToken, refreshKey) as RefreshToken;
  const { userId, sessionId } = decode;

  const sessionRecords = await pool.query(
    `
    SELECT * FROM sessions
    WHERE session_id=$1;
    `,
    [sessionId],
  );

  if (sessionRecords.rowCount === 0)
    throw new AppError("Session not found", 404, "NOT FOUND ERROR");

  const session = sessionRecords.rows[0];

  const hashedIncommingRefreshToken = crypto
    .createHash("sha256")
    .update(refreshToken)
    .digest("hex");

  const isRefreshTokensMatched =
    session.hashed_refresh_token === hashedIncommingRefreshToken;

  if (!isRefreshTokensMatched)
    throw new AppError("Invalid refresh token", 400, "BAD_REQUEST_ERROR");

  if (session.expires_at < new Date())
    throw new AppError("Refresh Token expired", 400, "REFRESH_TOKEN_EXPIRED");

  const accessToken = generateAccessToken({ userId });

  return { accessToken };
};
