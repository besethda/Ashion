import { Hono } from "hono"
import { serve } from "@hono/node-server"
import Database from "better-sqlite3"

const app = new Hono()
const db = new Database("database.db")

const getItemByID = db.prepare(`SELECT * FROM products WHERE id = ?`)
const getCategories = db.prepare(`SELECT * FROM categories`)
const getProductBYColor =

  app.get("/products", (c) => {
    const itemID = c.req.query('id')
    const product = getItemByID.get(itemID)
    if (!product) {
      return c.json({ message: "Not Found" }, 404)
    }
    return c.json(product)
  })

app.get("/categories", (c) => {
  const categories = getCategories.all()
  return c.json(categories)
})

serve({
  fetch: app.fetch,
  port: 3456
})

console.log("Server running on port 3456")