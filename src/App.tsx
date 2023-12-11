import { Route, Routes } from "react-router-dom";
import Navbar from "./layout/navbar";
import Home from "./pages/home";

const App = () => {
  return (
    <main className="max-w-[1440px] mx-auto">
      {/*  Navigation bar */}
      <Navbar />

      {/* main section */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
