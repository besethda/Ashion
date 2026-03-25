import { useState } from 'react'
import styles from './App.module.css'
import useApi from './hooks/api'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './pages/MainLayout'
import Home from './pages/Home'
import CategoryDisplay from './pages/CategoryDisplay'
import ItemDisplay from './pages/ItemDisplay'

function App() {

  const {loading, data} = useApi(`api/categories`)
  const [cart, setCart] = useState([])

  if(loading){
    return <div className={styles.loading}>Loading</div>
  } else {
    let categories = data ? data : []
    return (
      <Routes>
        {!loading &&
          <Route element={<MainLayout categories={categories} setCart={setCart} cart={cart}/>}>
            <Route path='/' element={<Home categories={categories}/>}/>
            <Route path='/category/:id' element={<CategoryDisplay setCart={setCart} cart={cart}/>}/>
            <Route path='/product/:id' element={<ItemDisplay setCart={setCart} cart={cart} />} />
          </Route>
          }
      </Routes>
    )
  }
}

export default App
