import { pool } from "../clients/postgres";
import AppError from "../error/AppError";
import bcryptjs from "bcryptjs";
import crypto from "crypto";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/generateTokens";

export const registerUser = async (
  email: string,
  password: string,
  name?: string,
) => {
  const existingUserRecords = await pool.query(
    `
        SELECT * FROM users
        WHERE email = $1;
        `,
    [email],
  );

  if (existingUserRecords.rowCount !== 0)
    throw new AppError("User already exists", 400, "BAD_REQUEST_ERROR");

  const hashedPassword = await bcryptjs.hash(password, 10);

  const userRecords = await pool.query(
    `
    INSERT INTO users (email, hashed_password, name)
    VALUES ($1, $2, $3)
    RETURNING *;
    `,
    [email, hashedPassword, name],
  );

  const user = userRecords.rows[0];

  const sessionRecords = await pool.query(
    `
    INSERT INTO sessions (user_id)
    VALUES ($1)
    RETURNING *;
    `,
    [user.id],
  );

  const session = sessionRecords.rows[0];
  
  const accessToken = generateAccessToken({ userId: user.id });

  const refreshToken = generateRefreshToken({
    sessionId: session.session_id,
    userId: user.id,
  });

  const hashedRefreshToken = crypto
    .createHash("sha256")
    .update(refreshToken)
    .digest("hex");

  await pool.query(
    `
    UPDATE sessions
    SET hashed_refresh_token = $1, expires_at = $2
    WHERE session_id = $3   
    `,
    [
      hashedRefreshToken,
      new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      session.session_id,
    ],
  );


  return { accessToken, refreshToken };
};
