import NavBar from "../components/Navbar";
import ThemeRegistry from "../theme/ThemeRegistry";

const RootLayout = ({ children }) => {
    return(
        <html lang='en'>
            <body>
                <ThemeRegistry options={{key: 'mui'}}>
                    <NavBar />
                    {children}
                </ThemeRegistry>
            </body>
        </html>
    )
}

export default RootLayout;
