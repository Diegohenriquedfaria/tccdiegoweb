import React from "react";

function Portfolio() {

  return (

    <section
      id="portfolio"
      style={{
        padding: '60px 20px',
        background: '#100a1e',
        color: 'white',
        textAlign: 'center'
      }}
    >

      <div style={{ marginBottom: '40px' }}>
        <h1>Portfólio</h1>
        <h2 style={{ color: '#cfcfcf', fontWeight: '400' }}>
          Meus trabalhos
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '25px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}
      >

        <div
          style={{
            background: '#f4f4f7',
            height: '200px',
            borderRadius: '12px',
            border: '1px solid #333'
          }}
        ></div>

        <div
          style={{
            background: '#faf6f6',
            height: '200px',
            borderRadius: '12px',
            border: '1px solid #333'
          }}
        ></div>

        <div
          style={{
            background: '#f7f2f2',
            height: '200px',
            borderRadius: '12px',
            border: '1px solid #333'
          }}
        ></div>

      </div>

    </section>

  );
}

export default Portfolio;