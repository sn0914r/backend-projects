import { pool } from "../clients/postgres";
import AppError from "../error/AppError";
import bcryptjs from "bcryptjs";
import crypto from "crypto";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/generateTokens";

export const loginUser = async (email: string, password: string) => {
  const userRecords = await pool.query(
    `
        SELECT * FROM users
        WHERE email = $1;
        `,
    [email],
  );

  if (userRecords.rowCount === 0)
    throw new AppError("User not found", 404, "NOT_FOUND_ERROR");

  const user = userRecords.rows[0];

  console.log("[User]", user)

  const isPasswordMatched = await bcryptjs.compare(
    password,
    user.hashed_password,
  );

  if (!isPasswordMatched)
    throw new AppError("Invalid Credentials", 400, "BAD_REQUEST_ERROR");

  await pool.query(
    `
    DELETE FROM sessions
    WHERE user_id = $1;
    `,
    [user.id],
  );

  const NewSessionRecords = await pool.query(
    `
    INSERT INTO sessions (user_id)
    VALUES ($1)
    RETURNING *;
    `,
    [user.id],
  );

  const newSession = NewSessionRecords.rows[0];

  const accessToken = generateAccessToken({ userId: user.id });

  const refreshToken = generateRefreshToken({
    sessionId: newSession.session_id,
    userId: user.id,
  });

  const hashedRefreshToken = crypto
    .createHash("sha256")
    .update(refreshToken)
    .digest("hex");

  const expiry_time = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  await pool.query(
    `
    UPDATE sessions
    SET hashed_refresh_token = $1, expires_at = $2
    WHERE session_id = $3;
    `,
    [hashedRefreshToken, expiry_time, newSession.session_id],
  );

  return { accessToken, refreshToken };
};
