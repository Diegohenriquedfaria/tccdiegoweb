export const Layout = ({children}) => {

    const layoutStyle = {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    };
    const mainStyle = {
        flex: 1
    };

    return(
        <div style={layoutStyle}>
            <nav style={{padding: '1rem', background: '#020202'}}>
                <img src="src/assets/logotipo_site.png" alt="logotipo site" />
                <ul>
                <li><a href="home">Home</a></li>
                <li><a href="sobre">Sobre</a></li>
                <li><a href="habilidades">Habilidades</a></li>
                <li><a href="serviços">Serviços</a></li>
                <li><a href="portifolio">Portifolio</a></li>
                <li><a href="depoimentos">Depoimentos</a></li>
                <li><a href="contatos">Contatos</a></li>
            </ul>
                 
            </nav>
            <main style={mainStyle}>
                {children}
            </main>
            <footer style={{padding: '1rem', background: '#333', color: 'white'}}>
                <div>
                    <div>
                        <h3>Diego Henrique</h3>
                        <h4>
Tenho 16 anos e iniciei minha formação em tecnologia aos 14, na Ctrl+Play. Desde o início, encarei a programação não apenas como aprendizado, mas como construção de base sólida para minha carreira.
Ao longo dos últimos anos, venho desenvolvendo projetos práticos, fortalecendo minha lógica, disciplina e capacidade de resolver problemas de forma estruturada. Começar cedo me permitiu amadurecer tecnicamente e entender que tecnologia exige constância, estratégia e evolução contínua.
Hoje, sigo focado em aprimorar minhas habilidades e transformar conhecimento em soluções reais, com visão de crescimento a longo prazo na área de desenvolvimento.
</h4>
                        <h4>© 2026 DHF - Web Solutions. Todos os direitos reservados.</h4>
                        <div>
                            <h4>Funcionalidades <a href=""> <br />Saiba  mais</a></h4>
                            <h4>Suporte <br /><a href="">Contato</a><br /> <a href=""> Suporte</a></h4>
                        </div>
                    
                    </div>
                </div>         
            </footer>
        </div>
    );
};