import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import { loadDes } from "../components/loadDes.js";

const MainLayout = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await loadDes();
      // console.log("Data:", data);
      setDestinations(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <Outlet context={destinations} />
      <Footer />
    </div>
  );
};
export default MainLayout;
