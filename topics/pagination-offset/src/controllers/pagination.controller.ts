import type { Request, Response } from "express";
import { getProducts } from "../services/pagination.service";

export const getProductsController = async (req: Request, res: Response) => {
  const data = await getProducts(res.locals.query);

  res.status(200).json({
    success: true,
    message: "Products fetched successfully",
    data,
  });
};
