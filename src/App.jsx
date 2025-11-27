import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";
import DetailDes from "./pages/DetailDes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="destinations/:slug" element={<DetailDes />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
