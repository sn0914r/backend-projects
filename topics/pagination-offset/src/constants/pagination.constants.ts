export const VALID_SORT_FIELDS = [
  "price",
  "stock",
  "rating",
  "name",
  "created_at",
] as const;

export const VALID_CATEGORIES = [
  "electronics",
  "books",
  "clothing",
  "furniture",
] as const;

export const VALID_ORDER = ["ASC", "DESC"] as const;
