import Header from "../../components/Header"
import { Outlet } from "react-router-dom";

const MainLayout = ({categories}) => {
  return (
    <>
        <Header categories={categories}/>
        <Outlet />
    </>
  );
};

export default MainLayout;