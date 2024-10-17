import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";

const AppRoutes = () => {
  return (
    <div className="pt-[50px] md:pt-[70px] lg:pt-[90px]">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About/>}/>
    </Routes>
    </div>
    
  );
};

export default AppRoutes;
