import React from "react";
import './Header.css'
// import { Link } from "react-router-dom";

// import Products from "../Content/Products";
// import About from "../Content/About";
// import Contact from "../Content/Contact";

export default function Header() {
  return (
    <header className="header-container">
      <div id="header-div" className="limit-section">
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
