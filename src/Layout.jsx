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
            <nav style={{padding: '1rem', background: '#020202', color:'white',display:'flex', justifyContent:'space-between', height:'70px', alignItems:'center', listStyle:'none', margin:'auto'}}>
                <img src="src/assets/logotipo_site.png" alt="logotipo site" style={{height:'70px', width:'auto'}
                }/>
                <ul style={{color:'white' , textDecoration:'none', fontWeight:'bold' , listStyleType:'none', display:'flex', gap:'210px'}}>
                <li><a href="home" style={{color:'white' , textDecoration:'none', display:'flex', gap:'10px'}}>Home</a></li>
                <li><a href="sobre"style={{color:'white' , textDecoration:'none', fontWeight:'bold'}}>Sobre</a></li>
                <li><a href="habilidades" style={{color:'white' , textDecoration:'none', fontWeight:'bold'}}>Habilidades</a></li>
                <li><a href="serviços" style={{color:'white' , textDecoration:'none', fontWeight:'bold'}}>Serviços</a></li>
                <li><a href="portifolio" style={{color:'white' , textDecoration:'none', fontWeight:'bold'}}>Portifolio</a></li>
                <li><a href="depoimentos" style={{color:'white' , textDecoration:'none', fontWeight:'bold'}}>Depoimentos</a></li>
                <li><a href="contatos" style={{color:'white' , textDecoration:'none', fontWeight:'bold'}}>Contatos</a></li>
            </ul>
                 
            </nav>
            <main style={mainStyle}>
                {children}
            </main>
            <footer style={{padding: '1rem', background: '#282828', color: 'white', padding:'20px', display:'flex', justifyContent:'space-between', alignItems:'center', fontWeight:'400'}}>
                <div>
                    <div>
                        <h3 style={{justifyContent:'center', textJustify:'center', justifyItems:'center'}}>Diego Henrique</h3>
                        <h4 style={{color:'#cac3c3'}}>
    Tenho 16 anos e iniciei minha formação em tecnologia aos 14, na Ctrl+Play. Desde o início, encarei a programação não apenas como aprendizado, mas como construção de base sólida para minha carreira.
Ao longo dos últimos anos, venho desenvolvendo projetos práticos, fortalecendo minha lógica, disciplina e capacidade de resolver problemas de forma estruturada. Começar cedo me permitiu amadurecer tecnicamente e entender que tecnologia exige constância, estratégia e evolução contínua.
Hoje, sigo focado em aprimorar minhas habilidades e transformar conhecimento em soluções reais, com visão de crescimento a longo prazo na área de desenvolvimento.
</h4>
                        <h4>© 2026 DHF - Web Solutions. Todos os direitos reservados.</h4>
                        <div>
                            <h4>Funcionalidades <a href="" style={{display:'flex', gap:'20px', textDecoration:'none', color:'white'}}> <br />Saiba  mais</a></h4>
                            <h4>Suporte <br /><a href="" style={{display:'flex', gap:'20px', textDecoration:'none', color:'white'}}>Contato</a><br /> <a href="" style={{display:'flex', gap:'20px', textDecoration:'none', color:'white'}}> Suporte</a></h4>
                        </div>
                    
                    </div>
                </div>         
            </footer>
        </div>
    );
};