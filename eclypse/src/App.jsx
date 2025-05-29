import React from "react";
import { Route, Routes , Navigate} from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import { DataProvider } from "./context/DataProvider";
import Home from "./pages/Home";
import About from "./pages/About";
import Waitlist from "./pages/Waitlist";
import Cart from "./pages/Cart";
export default function App() {
  return (
    <DataProvider>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} /> {/* ✅ Redirect root */}
          <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
    </DataProvider>
  );
}
