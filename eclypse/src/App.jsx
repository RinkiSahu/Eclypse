import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/DataProvider";
import Home from "./pages/Home";
import About from "./pages/About";
import Waitlist from "./pages/Waitlist";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function App() {
  return (
    <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </DataProvider>
  );
}
