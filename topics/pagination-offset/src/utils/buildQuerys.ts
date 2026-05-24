export const buildQuerys = (query: Record<string, any>) => {
  console.log(query);
  let whereClause = ``;

  // FIX: search query is not safe yet, maay lead to SQL injection
  if (query.category && query.search) {
    whereClause = `WHERE category ILIKE '%${query.category}%' AND name ILIKE '%${query.search}%'`;
  } else if (query.category) {
    whereClause = `WHERE category ILIKE '%${query.category}%'`;
  } else if (query.search) {
    whereClause = `WHERE name ILIKE '%${query.search}%'`;
  }

  const productsCountQuery = `SELECT COUNT(*) FROM products ${whereClause}`;

  const page = query.page;
  const limit = query.limit || 10;
  const skip = (page - 1) * limit;

  const productsQuery = `SELECT * FROM products ${whereClause} ORDER BY ${query.sort} ${query.order}
  OFFSET ${skip} LIMIT ${limit};
  `;

  return {
    productsCountQuery,
    productsQuery,
  };
};
