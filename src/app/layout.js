import ThemeRegistry from "../theme/ThemeRegistry";

const RootLayout = ({ children }) => {
    return(
        <html 
            lang='en'
            style={{
                scrollPaddingTop: '56px',
            }} 
        >
            <body>
                <ThemeRegistry options={{key: 'mui'}}>
                    {children}
                </ThemeRegistry>
            </body>
        </html>
    )
}

export default RootLayout;
