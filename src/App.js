// import React from 'react';
import Header from "./components/Header.jsx";
import ClassLayout from "./components/ClassLayout.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";
import "./style.css";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <ClassLayout />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
