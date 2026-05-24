import { pool } from "../clients/postgres.client";
import { buildQuerys } from "../utils/buildQuerys";

export const getProducts = async (query: any) => {
  const { productsCountQuery, productsQuery: pq } = buildQuerys(query);
  const productsQuery = await pool.query(pq);
  const products = productsQuery.rows;

  const productCountQuery = await pool.query(productsCountQuery);
  const productCount = productCountQuery.rows[0].count;

  return {
    products,
    pagination: {
      page: query.page,
      limit: query.limit,
      totalPages: Math.ceil(productCount / query.limit),
      total: Number(productCount),
    },
  };
};
