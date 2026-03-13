import React from "react";

function Footer() {
  return (
    <footer
      id="contato"
      style={{
        background: "#282828",
        color: "white",
        padding: "40px 20px"
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px"
        }}
      >
        
        {/* SOBRE */}
        <div>
          <h3 style={{ marginBottom: "10px" }}>Diego Henrique</h3>

          <p style={{ color: "#cac3c3", lineHeight: "1.6" }}>
            Tenho 16 anos e iniciei minha formação em tecnologia aos 14, na
            Ctrl+Play. Desde o início, encarei a programação não apenas como
            aprendizado, mas como construção de base sólida para minha carreira.
            Ao longo dos últimos anos, venho desenvolvendo projetos práticos,
            fortalecendo minha lógica, disciplina e capacidade de resolver
            problemas de forma estruturada.
          </p>
        </div>

        <div>
          <h3>Funcionalidades</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <a
              href="#servicos"
              style={{ textDecoration: "none", color: "white" }}
            >
              Saiba mais
            </a>
          </div>
        </div>

        {/* SUPORTE */}
        <div>
          <h3>Suporte</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <a
              href="#contato"
              style={{ textDecoration: "none", color: "white" }}
            >
              Contato
            </a>

            <a
              href="#suporte"
              style={{ textDecoration: "none", color: "white" }}
            >
              Suporte
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          color: "#cac3c3",
          fontSize: "14px"
        }}
      >
        © 2026 DHF - Web Solutions. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;