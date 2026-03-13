import React from "react";

function Sobre() {

  return (

    <section
      id="sobre"
      style={{
        backgroundColor: "black",
        padding: "20px",
        color: "#f1f1f1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
      }}
    >

      <div style={{ padding: "60px", maxWidth: "900px" }}>

        <h1 style={{ color: "#e2dede", marginBottom: "20px" }}>
          Sobre mim
        </h1>

        <h2 style={{ color: "#e2dede", marginBottom: "20px" }}>
          Diego Henrique de Faria
        </h2>

        <p style={{ color: "#bfbcbc", fontSize: "18px", lineHeight: "1.6" }}>
          Sou estudante e desenvolvedor em formação, com foco em desenvolvimento web.
          Tenho experiência com HTML, CSS, JavaScript e Python, além de interesse
          constante em aprender novas tecnologias.

          Gosto de transformar ideias em soluções funcionais, sempre buscando
          clareza, organização e boa experiência para o usuário.
        </p>

      </div>

    </section>

  );
}

export default Sobre;