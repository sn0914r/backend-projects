import { z as zod } from "zod";
import {
  VALID_CATEGORIES,
  VALID_ORDER,
  VALID_SORT_FIELDS,
} from "../constants/pagination.constants";

export const QuerySchema = zod.object({
  page: zod.coerce.number().min(1).default(1),
  limit: zod.coerce.number().min(1).max(50).default(10),
  search: zod.string().optional(),
  category: zod
    .string()
    .transform((e) => e.toLowerCase())
    .pipe(zod.enum(VALID_CATEGORIES))
    .optional(),
  order: zod
    .string()
    .transform((s) => s.toUpperCase())
    .pipe(zod.enum(VALID_ORDER))
    .default("DESC"),
  sort: zod
    .string()
    .transform((s) => s.toLowerCase())
    .pipe(zod.enum(VALID_SORT_FIELDS))
    .default("price")
});
