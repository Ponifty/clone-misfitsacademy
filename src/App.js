// import React from 'react';
import Header from "./components/Header.jsx";
import HomeLayout from "./components/HomeLayout.jsx";
import ClassLayout from "./components/ClassLayout.jsx";
import InscriptionsLayout from "./components/InscriptionsLayout.jsx";
import ContactLayout from "./components/ContactLayout.jsx";
import Footer from "./components/Footer.jsx";
import "./style.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/cours" element={<ClassLayout />} />
        <Route path="inscription" element={<InscriptionsLayout />} />
        <Route path="/contact" element={<ContactLayout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
