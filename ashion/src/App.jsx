import { useState } from 'react'
import styles from './App.module.css'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './pages/MainLayout'
import Home from './pages/Home'
import Category from './components/Category'

function App() {

    const [cart, setCart] = useState(null)

  const categories =
    [
      { name: "Womens", path: "women.jpeg", media: "mobile-image.png" },
      { name: "Mens", path: "men.jpeg" },
      { name: "Kids", path: "kids.jpeg" },
      { name: "Cosmetics", path: "cosmetics.jpeg" },
      { name: "Accessories", path: "accessories.jpeg" }
    ]

  return (
    <Routes>
        <Route element={<MainLayout categories={categories} setCart={setCart}/>}>
          <Route path='/' element={<Home categories={categories}/>}/>
          <Route path='/category/:name' element={<Category categories={categories} setCart={setCart}/>}/>
        </Route>
    </Routes>
  )
}

export default App
