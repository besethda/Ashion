import { useState } from "react";
import Cart from "../../components/Cart";
import Header from "../../components/Header"
import { Outlet } from "react-router-dom";

const MainLayout = ({categories, cart, setCart}) => {

  const [cartDisplay, setCartDisplay] = useState(false)

  return (
    <>
        <Header categories={categories} setCartDisplay={setCartDisplay} cartDisplay={cartDisplay} cart={cart}/>
        {cartDisplay &&<Cart cart={cart} setCart={setCart}/>}
        <Outlet />
    </>
  );
};

export default MainLayout;