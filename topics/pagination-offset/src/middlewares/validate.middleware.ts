import type { ZodType } from "zod";
import type { Request, Response, NextFunction } from "express";

export const validate = (schema: ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const validatedQuery = schema.parse(req.query);
    res.locals.query = validatedQuery;
    next();
  };
};
