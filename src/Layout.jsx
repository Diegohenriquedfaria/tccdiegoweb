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

            <main style={mainStyle}>
                {children}
            </main>
            
            
        </div>
    );
};