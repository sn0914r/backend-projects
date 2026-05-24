import type { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
import { ZodError } from "zod";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const isProd = process.env.NODE_ENV === "production";

  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Validation error",
      errorCode: "VALIDATION_ERROR",
      err: err.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    });
  }

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errorCode: err.errorCode,
      err: err.errors,
    });
  }

  return res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
    errorCode: "INTERNAL_SERVER_ERROR",
    stack: isProd ? null : err.stack,
  });
};
