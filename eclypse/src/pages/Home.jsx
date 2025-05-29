import React from "react";
import { ArrowUpRight } from "lucide-react";
import Herobanner from "../components/Herobanner";
import Product from "../components/Product";
import Customer from "../components/Customer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Herobanner />
      <Product />
      <Customer />
      <Footer />
    </div>
  );
}

export default Home;
