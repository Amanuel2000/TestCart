import Navbar from "./components/Navbar";
import Store from "./pages/Store";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Store />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;