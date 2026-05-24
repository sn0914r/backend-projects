import Chance from "chance";
import { pool } from "../src/clients/postgres.client";

const chance = new Chance();

const categories = ["Electronics", "Books", "Clothing", "Furniture"];

const generateProducts = (count: number) => {
  const products = [];

  for (let i = 1; i <= count; i++) {
    products.push({
      name: chance.word(),
      description: chance.sentence(),
      price: chance.integer({ min: 100, max: 5000 }),
      category: chance.pickone(categories),
      stock: chance.integer({ min: 0, max: 200 }),
      rating: Number((Math.random() * 5).toFixed(1)),
    });
  }

  return products;
};

const saveToDb = async (totalProducts: number) => {
  const products = generateProducts(totalProducts);

  for (const product of products) {
    await pool.query(
      `
      INSERT INTO products
      (name, description, price, category, stock, rating)
      VALUES ($1, $2, $3, $4, $5, $6)
      `,
      [
        product.name,
        product.description,
        product.price,
        product.category,
        product.stock,
        product.rating,
      ],
    );
  }

  console.log(`[INFO] ${totalProducts} products inserted`);
};

saveToDb(100)