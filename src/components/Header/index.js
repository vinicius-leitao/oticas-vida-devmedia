import React from "react";
// import { Link } from "react-router-dom";

// import Products from "../Content/Products";
// import About from "../Content/About";
// import Contact from "../Content/Contact";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <img src="assets/logo.png" alt="Oticas Vida logo" />
        <nav>
          <a href="#produtos">PRODUTOS</a>
          <a href="#sobre">SOBRE</a>
          <a href="#contato">CONTATO</a>
        </nav>
      </div>
    </header>
  );
}
