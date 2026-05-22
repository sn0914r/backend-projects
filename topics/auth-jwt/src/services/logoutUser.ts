import { pool } from "../clients/postgres";
import AppError from "../error/AppError";
import type { RefreshToken } from "./refreshToken";
import jwt from "jsonwebtoken";

export const logoutUser = async (refreshToken: string) => {
  const refreshKey = process.env.REFRESH_KEY;
  if (!refreshKey)
    throw new AppError("REFRESH_KEY env var not set", 500, "ENV_VAR_NOT_SET");

  const decode = jwt.verify(refreshToken, refreshKey) as RefreshToken;
  const { sessionId } = decode;

  await pool.query(
    `
        DELETE FROM sessions
        WHERE session_id = $1;
    `,
    [sessionId],
  );

  return;
};
