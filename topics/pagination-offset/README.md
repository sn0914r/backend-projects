# Offset Pagination

Backend pagination system built using Node.js, Express, TypeScript and PostgreSQL.

Supports:
- Offset pagination
- Sorting
- Searching
- Filtering
- Query validation
- Pagination metadata

## Stack

- Node.js
- Express
- TypeScript
- PostgreSQL
- Zod

## Structure

```txt
src/
├── clients/
├── constants/
├── controllers/
├── db/
├── errors/
├── middlewares/
├── routes/
├── services/
├── utils/
├── validators/
├── app.ts
└── server.ts
```

## Features

- Page-based pagination
- LIMIT/OFFSET queries
- Search products
- Filter by category
- Sort products
- Pagination metadata
- Query validation using Zod
- Query parameter transformation
- Default query values
- Max limit protection

## Supported Query Params

```txt
?page=1
&limit=10
&search=iphone
&category=electronics
&sort=price
&order=DESC
```

## Request Flow

1. Client sends query params
2. Zod validates and transforms query params
3. Controller passes validated query to service
4. Query builder creates SQL query
5. Service fetches products from PostgreSQL
6. Paginated response returned to client

## Pagination Flow

1. Backend receives page and limit
2. OFFSET is calculated using:

```txt
(page - 1) * limit
```

3. SQL query uses LIMIT and OFFSET
4. Database returns only required rows
5. Backend sends pagination metadata with response

## Example SQL Query

```sql
SELECT * FROM products
WHERE category = 'electronics'
ORDER BY price DESC
LIMIT 10 OFFSET 20;
```

## Example Response

```json
{
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 200,
    "totalPages": 20
  }
}
```

## Seed Script

A seed script is included to generate fake product data for pagination testing.

#### Generate Products

```bash
npm run seed
```

####  Generated Fields

- name
- description
- price
- category
- stock
- rating

## Security Notes

- Query params validated using Zod
- Sort fields are whitelist-based
- Order values restricted to ASC/DESC
- Max limit protection added

## Notes

- Offset pagination is simple to implement
- Large OFFSET values become slower on huge datasets
- Search query is not fully safe yet and may lead to SQL injection