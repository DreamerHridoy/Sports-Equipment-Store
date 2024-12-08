import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Slider from "../Slider";
import Products from "../Products";
import SportsCategory from "../SportsCategory";

const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <Products></Products>
      <SportsCategory></SportsCategory>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
