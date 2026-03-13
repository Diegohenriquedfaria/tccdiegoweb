import React from "react";

function Contato() {
  return (
    <section className="coluna1">

      <div style={{ marginBottom: "40px" }}>
        <h2 className="h21" style={{ color: "#1b1a1a", fontWeight: "400" }}>
          Minha Paixão
        </h2>

        <p className="col1">
          Por trás de cada projeto existe uma lógica, uma intenção e uma forma de pensar.
          Um bom sistema não é apenas funcional, ele carrega a visão de quem o desenvolveu.

          Cada aplicação que construo reflete mais do que código: revela minha maneira de
          resolver problemas, organizar ideias e transformar desafios em soluções claras
          e eficientes.

          Não se trata apenas de tecnologia ou linguagem de programação. Trata-se da
          experiência que quero proporcionar, da estrutura que sustenta o sistema e da
          motivação por trás de cada decisão técnica.

          Programar, para mim, é mais do que escrever código. É criar soluções que fazem
          sentido, que geram impacto e que traduzem pensamento em resultado.
        </p>
      </div>

      <div className="div22">
        <h2 className="title1">Minhas redes sociais</h2>

        <div className="links">
          <a href="mailto:seuemail@email.com">E-mail</a>
          <a href="#">Instagram</a>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>

    </section>
  );
}

export default Contato;