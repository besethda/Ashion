import { useState } from 'react'
import styles from './App.module.css'
import Header from "./components/Header"
import Display from "./components/Display"

function App() {

  const categories =
    [
      { name: "Womens", path: "women.jpeg", media: "mobile-image.png" },
      { name: "Mens", path: "men.jpeg" },
      { name: "Kids", path: "kids.jpeg" },
      { name: "Cosmetics", path: "cosmetics.jpeg" },
      { name: "Accessories", path: "accessories.jpeg" }
    ]

  return (
    <div className={styles.container}>
      <Header categories={categories} />
      <Display categories={categories} />
    </div>
  )
}

export default App
