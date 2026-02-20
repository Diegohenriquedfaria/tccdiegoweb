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
            <nav style={{padding: '1rem', background: '#eee'}}>
                 
            </nav>
            <main style={mainStyle}>
                {children}
            </main>
            <footer style={{padding: '1rem', background: '#333', color: 'white'}}>
                Footer Provisorio               
            </footer>
        </div>
    );
};