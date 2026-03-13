import React from "react";
import logo from "./assets/logotipo_site.png";

function Navbar() {

  const navStyle = {
    padding: "1rem",
    background: "#020202",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    height: "70px",
    alignItems: "center",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 200,
  };

  const ulStyle = {
    listStyle: "none",
    display: "flex",
    gap: "10px",
    fontWeight: "bold"
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none"
  };

  return (
    <nav style={navStyle}>

      <img
        src={logo}
        alt="logotipo site"
        style={{ height: "70px", width: "auto" }}
      />

      <ul style={ulStyle}>
        <li><a href="#home" style={linkStyle}>Home</a></li>
        <li><a href="#sobre" style={linkStyle}>Sobre</a></li>
        <li><a href="#habilidades" style={linkStyle}>Habilidades</a></li>
        <li><a href="#servicos" style={linkStyle}>Serviços</a></li>
        <li><a href="#portfolio" style={linkStyle}>Portfólio</a></li>
        <li><a href="#contatos" style={linkStyle}>Contatos</a></li>
      </ul>

    </nav>
  );
}

export default Navbar;