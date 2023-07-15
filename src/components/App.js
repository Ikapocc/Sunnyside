import React from "react";
import Navbar from "./Navbar/Navbar";
import Sections from "./Sections/Sections";
import Carouselimg from "./ImageCarousel/ImageCarousel";
import Footer from "./Footer/Footer";

export default function App() {
  return (
      <div>
        <Navbar />
        <Sections />
        <Carouselimg />
        <Footer />
      </div>
  );
}
