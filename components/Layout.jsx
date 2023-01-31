import NavBar from "./Navbar"

const Layout = ({ children }, props) => {
    return (
        <div>
            <NavBar 
                isDarkMode={props.darkMode}
                handleClick={props.handleClick}
            />
            { children }
        </div>
    )
}

export default Layout
