import { Router } from "express";
import { getProductsController } from "../controllers/pagination.controller";
import { validate } from "../middlewares/validate.middleware";
import { QuerySchema } from "../validators/pagination.schema";

export const paginationRouter = Router();

paginationRouter.get("/products", validate(QuerySchema), getProductsController);
