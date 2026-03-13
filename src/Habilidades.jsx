import React from "react";

function Habilidades() {

  return (

    <section style={{padding:'60px 20px', background:'#f5f3f3', color:'white'}}>

      <h1 style={{textAlign:'center', marginBottom:'40px', color:'black'}}>Habilidades</h1>

      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))',
        gap:'25px'
      }}>

        <div style={{
          background:'#1e1e1e',
          padding:'25px',
          borderRadius:'12px',
          border:'1px solid #333'
        }}>
          <h2>Python</h2>
          <h3 style={{fontWeight:'400', color:'#cfcfcf'}}>
            Desenvolvimento de aplicações utilizando Python, com foco em lógica de programação,
            estruturas de dados, automação e criação de pequenos projetos práticos.
          </h3>
        </div>

        <div style={{
          background:'#1e1e1e',
          padding:'25px',
          borderRadius:'12px',
          border:'1px solid #333'
        }}>
          <h2>HTML5</h2>
          <h3 style={{fontWeight:'400', color:'#cfcfcf'}}>
            Estruturação de páginas web utilizando HTML5, aplicando boas práticas de organização
            semântica e criação de layouts bem definidos.
          </h3>
        </div>

        <div style={{
          background:'#1e1e1e',
          padding:'25px',
          borderRadius:'12px',
          border:'1px solid #333'
        }}>
          <h2>CSS3</h2>
          <h3 style={{fontWeight:'400', color:'#cfcfcf'}}>
            Estilização de interfaces web com CSS3, incluindo organização visual,
            responsividade básica e aprimoramento da experiência do usuário.
          </h3>
        </div>

        <div style={{
          background:'#1e1e1e',
          padding:'25px',
          borderRadius:'12px',
          border:'1px solid #333'
        }}>
          <h2>JavaScript</h2>
          <h3 style={{fontWeight:'400', color:'#cfcfcf'}}>
            Desenvolvimento de interatividade em páginas web utilizando JavaScript,
            aplicando conceitos como manipulação do DOM, eventos e lógica aplicada ao front-end.
          </h3>
        </div>

        <div style={{
          background:'#1e1e1e',
          padding:'25px',
          borderRadius:'12px',
          border:'1px solid #333'
        }}>
          <h2>Lógica de Programação</h2>
          <h3 style={{fontWeight:'400', color:'#cfcfcf'}}>
            Capacidade de estruturar algoritmos, resolver problemas computacionais
            e desenvolver soluções eficientes utilizando raciocínio lógico.
          </h3>
        </div>

        <div style={{
          background:'#1e1e1e',
          padding:'25px',
          borderRadius:'12px',
          border:'1px solid #333'
        }}>
          <h2>Desenvolvimento Web</h2>
          <h3 style={{fontWeight:'400', color:'#cfcfcf'}}>
            Criação de projetos web integrando HTML, CSS e JavaScript,
            compreendendo a estrutura, o design e o comportamento de aplicações front-end.
          </h3>
        </div>

        <div style={{
          background:'#1e1e1e',
          padding:'25px',
          borderRadius:'12px',
          border:'1px solid #333'
        }}>
          <h2>Resolução de Problemas</h2>
          <h3 style={{fontWeight:'400', color:'#cfcfcf'}}>
            Habilidade de analisar desafios, identificar soluções estratégicas
            e aplicar conhecimentos técnicos para superar obstáculos de forma eficiente.
          </h3>
        </div>

      </div>

    </section>

  );
}

export default Habilidades;