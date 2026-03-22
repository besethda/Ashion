import { Hono } from "hono"
import { serve } from "@hono/node-server"
import Database from "better-sqlite3"

const app = new Hono()
const db = new Database("database.db")

const getItemByID = db.prepare(`SELECT * FROM products WHERE id = ?`)
const createCategory = db.prepare(`INSERT INTO categories (name) VALUES (?)`)
const createProduct = db.prepare(`INSERT INTO products (name, price, color, description, image) VALUES (?, ?, ?, ?, ?)`)
const removeProduct = db.prepare(`DELETE FROM products WHERE id = ?`)
const removeCategory = db.prepare(`DELETE FROM categories WHERE id = ?`)
const getCategories = db.prepare(`SELECT * FROM categories`)
const createItemCategory = db.prepare(`INSERT INTO categories_products (category_id, product_id) VALUES (?, ?)`)
const findCategoryByName = db.prepare(`SELECT * FROM categories WHERE name = ?`)
const findProductIdByName = db.prepare(`SELECT * FROM products WHERE name = ?`)

app.get("/products/:name", (c) => {
  const itemID = c.req.query('id')
  const product = getItemByID.get(itemID)
  if (!product) {
    return c.json({ message: "Not Found" }, 404)
  }
  return c.json(product)
})

app.post("/create-product", async (c) => {
  const body = await c.req.json()
  const name = body.name ? body.name : null
  const price = body.price ? body.price : null
  const color = body.color ? body.color : null
  const description = body.description ? body.description : null
  const image = body.image ? body.image : null
  const categories = body.categories ? body.categories : null
  if (!name || !price || !color || !description || !image || !categories) {
    return c.json({message: "must include name, price, color, image, at least one category, and description!"}, 400)
  }
  const product = createProduct.run(name, price, color, description, image)
  const productId = product.lastInsertRowid
  categories.forEach(e=> {
    return findCategoryByName.get(e)
  })
  categoryIds.forEach(e=> {
    createItemCategory.run(e, productId)
  })
  return c.json({message: `Item: '${body.name}' Result: ${product.changes !== 0 ? 'success' : 'failure'}`})
})

app.post("/remove-product", async (c)=> {
  const body = await c.req.json()
  const product = removeProduct.run(body.id)
  console.log(product)
  return c.json({message: `Item: '${body.id}' Result: ${product.changes !== 0 ? 'success' : 'failure'}`})
})

app.get("/categories", (c) => {
  const categories = getCategories.all()
  return c.json(categories)
})

app.post("/create-category", async (c) => {
  const body = await c.req.json()
  const category = createCategory.run(body.name)
  return c.json({message: `Category: ${body.name} Result: ${category.changes !== 0 ? 'success' : 'failure'}`})
})

app.post("/remove-category", async (c) => {
  const body = await c.req.json()
  const category = removeCategory.run(body.id)
  return c.json({message: `Category: ${body.id} Result: ${category.changes !== 0 ? 'success' : 'failure'}`})
})


serve({
  fetch: app.fetch,
  port: 3456
})

console.log("Server running on port 3456")