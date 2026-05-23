import type { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { AppError } from "../errors/AppError";

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
      message: "Valudation error",
      errorCode: "VALIDATION_ERROR",
      errors: err.issues.map((issue) => ({
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
      errors: err.errors,
    });
  }

  res.status(err.statusCode || 500).json({
    success: false,
    message: isProd ? "Internal Server Error" : err.message,
    errorCode: "INTERNAL_SERVER_ERROR",
    stack: isProd ? undefined : err.stack,
  });
};
