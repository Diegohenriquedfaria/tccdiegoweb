import { useState } from 'react'
import { Layout } from './Layout/'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <section >
          <div>
            <h1>Sobre mim</h1>
            <h2>Diego Henrique de Faria <br />Sou estudante e desenvolvedor em formação,  com foco em desenvolvimento web. Tenho exériência com HTML, CSS, JavaScript e Python, além de interesse constante em aprender novas tecnologias. Gosto de transformar  ideais em soluçôes  funcionais, sempre buscando clareza, organização e boa experiência para o usuário</h2>
          </div>
        </section>
        <section>
            <h1>Habilidades</h1>
            <div>
              <div>
                <h2>Python</h2>
                <h3>Desenvolvimento de aplicações utilizando Python, com foco em lógica de programação, estruturas de dados, automação e criação de pequenos projetos práticos.</h3>
              </div>
              <div>
                <h2>HTML5</h2>
                <h3>Estruturação de páginas web utilizando HTML5, aplicando boas práticas de organização semântica e criação de layouts bem definidos.</h3>
              </div>
              <div>
                <h2>CSS3</h2>
                <h3>Estilização de interfaces web com CSS3, incluindo organização visual, responsividade básica e aprimoramento da experiência do usuário.</h3>
              </div>
              <div>
                <h2>JavaScript</h2>
                <h3>Desenvolvimento de interatividade em páginas web utilizando JavaScript, aplicando conceitos como manipulação do DOM, eventos e lógica aplicada ao front-end.</h3>
              </div>
              <div>
                <h2>Lógica de Programação</h2>
                <h3>Capacidade de estruturar algoritmos, resolver problemas computacionais e desenvolver soluções eficientes utilizando raciocínio lógico.</h3>
              </div>
              <div>
                <h2>Desenvolvimento web</h2>
                <h3>Criação de projetos web integrando HTML, CSS e JavaScript, compreendendo a estrutura, o design e o comportamento de aplicações front-end.</h3>
              </div>
              <div>
                <h2>Resolução de problemas</h2>
                <h3>Habilidade de analisar desafios, identificar soluções estratégicas e aplicar conhecimentos técnicos para superar obstáculos de forma eficiente.</h3>
              </div>
            </div>
        </section>
        <section>
          <div>
            <h1>Serviços</h1>
            <h2>Soluções que ofereço</h2>
          </div>
          <div>
            <div>
              <img src="src/assets/img_criaçãosites.app.png" alt="SERVIÇO CREAT SITE" />
            </div>
            <div>
              <img src="src/assets/img_desenvolvimento.web.png" alt="SERVIÇO DESENVOLVIMENTO WEB" />
            </div>
            <div>
              <img src="src/assets/img_programação.solução.png" alt="Serviço programação" />
            </div>
          </div>
          <div>
            <button> Contratar</button>
             <button>Detalhes</button>
          </div>
        </section>
        <section>
          <div>
            <h1>Portifolio</h1>
            <h2>Meus trabalhos</h2>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </section>
        <section>
          <div>
            <h2>Minha Paixão</h2>
            <h3>Por trás de cada projeto existe uma lógica, uma intenção e uma forma de pensar. Um bom sistema não é apenas funcional, ele carrega a visão de quem o desenvolveu.
Cada aplicação que construo reflete mais do que código: revela minha maneira de resolver problemas, organizar ideias e transformar desafios em soluções claras e eficientes.
Não se trata apenas de tecnologia ou linguagem de programação. Trata-se da experiência que quero proporcionar, da estrutura que sustenta o sistema e da motivação por trás de cada decisão técnica.
Programar, para mim, é mais do que escrever código. É criar soluções que fazem sentido, que geram impacto e que traduzem pensamento em resultado.</h3>
          </div>
          <div>
            <h2>Minhas redes sociais</h2>
            <h3><a href="">E-mail</a></h3>
            <h3><a href="">Instagram</a></h3>
            <h3><a href=""> Github</a></h3>
            <h3><a href=""> Linkllind</a></h3>
          </div>
        </section>
          
      </Layout>
    </>
  )
}

export default App
