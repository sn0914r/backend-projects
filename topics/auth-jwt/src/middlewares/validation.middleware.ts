import type { NextFunction, Request, Response } from "express";
import type { ZodType } from "zod";

export const validation =
  (schema: ZodType) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const validatedBody = schema.parse(req.body);
    req.body = validatedBody;
    next();
  };
