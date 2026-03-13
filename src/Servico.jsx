import React from "react";

function Servicos() {

  return (

    <section id="servicos" style={{padding:'60px 20px', background:'#0b0b0b', color:'white'}}>

      <div style={{textAlign:'center', marginBottom:'40px'}}>
        <h1>Serviços</h1>
        <h2 style={{color:'#cfcfcf', fontWeight:'400'}}>Soluções que ofereço</h2>
      </div>

      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))',
        gap:'25px'
      }}>

        <div style={{
          background:'#1e1e1e',
          padding:'25px',
          borderRadius:'12px',
          border:'1px solid #333',
          textAlign:'center'
        }}>
          <img
            src="/src/assets/img_criaçãosites.app.png"
            alt="Criação de sites"
            style={{width:'120px', marginBottom:'15px'}}
          />
          <h3>Criação de Sites</h3>
          <p style={{color:'#cfcfcf'}}>
            Desenvolvimento de sites modernos e funcionais,
            focados em desempenho e experiência do usuário.
          </p>
        </div>

        <div style={{
          background:'#1e1e1e',
          padding:'25px',
          borderRadius:'12px',
          border:'1px solid #333',
          textAlign:'center'
        }}>
          <img
            src="/src/assets/img_desenvolvimento.web.png"
            alt="Desenvolvimento web"
            style={{width:'120px', marginBottom:'15px'}}
          />
          <h3>Desenvolvimento Web</h3>
          <p style={{color:'#cfcfcf'}}>
            Construção de aplicações web utilizando tecnologias
            modernas como HTML, CSS e JavaScript.
          </p>
        </div>

        <div style={{
          background:'#1e1e1e',
          padding:'25px',
          borderRadius:'12px',
          border:'1px solid #333',
          textAlign:'center'
        }}>
          <img
            src="/src/assets/img_programação.solução.png"
            alt="Programação"
            style={{width:'120px', marginBottom:'15px'}}
          />
          <h3>Soluções em Programação</h3>
          <p style={{color:'#cfcfcf'}}>
            Desenvolvimento de soluções personalizadas
            para resolver problemas e automatizar processos.
          </p>
        </div>

      </div>

      <div style={{
        display:'flex',
        justifyContent:'center',
        gap:'20px',
        marginTop:'40px'
      }}>

        <button style={{
          padding:'12px 25px',
          borderRadius:'8px',
          border:'none',
          background:'#4da6ff',
          color:'white',
          cursor:'pointer'
        }}>
          Contratar
        <a href="https://www.figma.com/site/QewMhiGuuCYVqfZ865uJdM/PORTIFOLIO?t=j2iTtfzJRMbl0qod-0"></a></button>

        <button style={{
          padding:'12px 25px',
          borderRadius:'8px',
          border:'1px solid #4da6ff',
          background:'transparent',
          color:'#4da6ff',
          cursor:'pointer'
        }}>
          Detalhes
        </button>

      </div>

    </section>

  );
}

export default Servicos;