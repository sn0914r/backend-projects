## Pagination

1. Pagination means fetching data in smaller chunks instead of loading everything at once.
2. In backend systems, pagination is used to:
   - improve performance
   - reduce database load
   - reduce response size
   - make APIs faster and scalable
3. For example, instead of returning 10,000 products in one API response, the backend may return only 20 products per request.

---

## Types of Pagination

1. There are mainly two common types:
   - Offset pagination
   - Cursor pagination

---

## Offset Pagination

1. Offset pagination is a pagination technique where we skip a certain number of rows and fetch a limited number of rows from the database.
2. It usually uses `LIMIT` and `OFFSET` in SQL.

```sql
SELECT * FROM products
LIMIT 10 OFFSET 20;
```

- `OFFSET 20` skips the first 20 rows
- `LIMIT 10` fetches the next 10 rows

3. This is commonly used for page-based navigation like:
   - page 1
   - page 2
   - page 3

4. Offset pagination is simple to implement, but for very large datasets it becomes slower because the database still has to scan skipped rows before returning results.