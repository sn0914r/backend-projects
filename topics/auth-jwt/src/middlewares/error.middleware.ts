import type { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import AppError from "../error/AppError";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const isProd = process.env.NODE_ENV === "production";

  if (err instanceof ZodError) {
    console.log("[ERRORS]", err.issues)
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errorCode: "VALIDATION_ERROR",
      errors: err.issues.map((iss) => ({
        field: iss.path.join("."),
        message: iss.message,
      })),
    });
  }

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errorCode: err.statusCode,
      errors: err.errors,
    });
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const errorCode = err.errorCode || "INTERNAL_SERVER_ERROR";
  res.status(statusCode).json({
    success: false,
    message,
    errorCode,
    stack: isProd ? undefined : err.stack,
  });
};
