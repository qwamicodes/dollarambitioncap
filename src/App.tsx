import { Route, Routes } from "react-router-dom";

import Navbar from "./layout/navbar";

import Home from "./pages/home";
import Blog from "./pages/blog";
import Footer from "./layout/footer";
import Services from "./pages/services";
import About from "./pages/about";
import Contact from "./pages/contact";
import PrivacyPolicy from "./pages/privacy-policy";

const App = () => {
  return (
    <main className="max-w-[1920px] mx-auto">
      {/*  Navigation bar */}
      <Navbar />

      {/* main section */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </main>
  );
};

export default App;
