"use client"
import Link from 'next/link'
import { AppBar, Toolbar, Container, Box, Button, IconButton, Menu, MenuItem} from '@mui/material'
import {HomeOutlined, IntegrationInstructionsOutlined, ArticleOutlined, LightModeOutlined, DarkModeOutlined} from '@mui/icons-material'
import {Home, IntegrationInstructions, Article, DarkMode, LightMode} from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const NavBar = ({ isDarkMode, toggleDarkMode }) => {

    /* Use to Determine Active Page For Navigation */
    const currentRoute = usePathname();

    /* Hamburger Menu Config */
    const [anchorEl, setAnchorEl] = useState(null); // State: Determine HTML Element that Menu will Attach To
    const open = Boolean(anchorEl); // If Parameter is an object -> true, else null -> false boolean value
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget); // Menu attaches to HTML Element that's triggering event 
    };
    const handleClose = () => {
        setAnchorEl(null); // Menu has no HTML Element to attach to
    };

    return (
        <Box sx={{position: 'fixed', top: '0px', zIndex: '999' }}>
            <AppBar position='fixed' >
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        
                        {/* Hamburger Menu */}
                        <Box
                            sx={{
                                display: {xs: 'flex', sm: 'none'},
                                position: 'static',
                                flexGrow: 1,
                            }}
                        >
                            <IconButton 
                                onClick={handleClick}
                                sx={{
                                    borderRadius: '15px',
                                    borderStyle: 'solid',
                                    borderWidth: '2px',
                                    borderColor: 'darkMode.background',
                                    color: 'darkMode.icon',
                                    "&:hover": {
                                        backgroundColor: 'iconColor.hover'
                                    }
                                }}
                            >
                                <MenuIcon />
                            </IconButton>    
                            <Menu 
                                id="hamburger-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                <MenuItem 
                                    onClick={handleClose}
                                >
                                 {/* Navigation Button: Home */}
                                    <Link href='#home' style={{textDecoration: 'none'}}>
                                        <Button 
                                            variant='text' 
                                            startIcon={currentRoute === '/' ? <Home /> : <HomeOutlined />}
                                            sx = {{
                                                color: 'text.primary',
                                                fontWeight: currentRoute === '/' ? 'bold' : 'normal',
                                                "&:hover": {
                                                    backgroundColor: 'iconColor.hover'
                                                }
                                            }}
                                        >
                                            Home
                                        </Button>
                                    </Link>
                                </MenuItem>
                                
                                <MenuItem 
                                    onClick={handleClose}
                                >
                                    {/* Navigation Button: Projects */}
                                    <Link href='#projects' style={{textDecoration: 'none'}}>
                                        <Button 
                                            variant='text' 
                                            startIcon={currentRoute === '/projects' ? <IntegrationInstructions /> : <IntegrationInstructionsOutlined />} 
                                            sx = {{
                                                color: 'text.primary',
                                                fontWeight: currentRoute === '/projects' ? 'bold' : 'normal',
                                                "&:hover": {
                                                    backgroundColor: 'iconColor.hover'
                                                }
                                            }}
                                        >
                                            Projects
                                        </Button>
                                    </Link>    
                                </MenuItem>

                                <MenuItem 
                                    onClick={handleClose}
                                >
                                    {/* Navigation Button: Resume */}
                                    <Link href='#resume' style={{textDecoration: 'none'}}>
                                        <Button 
                                            variant='text' 
                                            startIcon={currentRoute === '/resume' ? <Article /> : <ArticleOutlined />} 
                                            sx = {{
                                                color: 'text.primary',
                                                fontWeight: currentRoute === '/resume' ? 'bold' : 'normal',
                                                "&:hover": {
                                                    backgroundColor: 'iconColor.hover'
                                                }
                                            }}
                                        >
                                            Resume
                                        </Button>
                                    </Link>
                                </MenuItem>
                            </Menu>
                        </Box>
                         
                        {/* Full Size Navigation Bar */}
                        <Box 
                            sx={{ 
                                display: {xs: 'none', sm: 'flex'},
                                position: 'static',
                                flexGrow: 1,
                            }}
                        >
                            {/* Navigation Button: Home */}
                            <Link href='#home' style={{textDecoration: 'none'}}>
                                <Button 
                                    variant='text' 
                                    startIcon={currentRoute === '/' ? <Home /> : <HomeOutlined />}
                                    sx = {{
                                        color: 'text.primary',
                                        fontWeight: currentRoute === '/' ? 'bold' : 'normal',
                                        "&:hover": {
                                            backgroundColor: 'iconColor.hover'
                                        }
                                    }}
                                >
                                    Home
                                </Button>
                            </Link>

                            {/* Navigation Button: Projects */}
                            <Link href='#projects' style={{textDecoration: 'none'}}>
                                <Button 
                                    variant='text' 
                                    startIcon={currentRoute === '/projects' ? <IntegrationInstructions /> : <IntegrationInstructionsOutlined />} 
                                    sx = {{
                                        color: 'text.primary',
                                        fontWeight: currentRoute === '/projects' ? 'bold' : 'normal',
                                        "&:hover": {
                                            backgroundColor: 'iconColor.hover'
                                        }
                                    }}
                                >
                                    Projects
                                </Button>
                            </Link>

                            {/* Navigation Button: Resume */}
                            <Link href='#resume' style={{textDecoration: 'none'}}>
                                <Button 
                                    variant='text' 
                                    startIcon={currentRoute === '/resume' ? <Article /> : <ArticleOutlined />} 
                                    sx = {{
                                        color: 'text.primary',
                                        fontWeight: currentRoute === '/resume' ? 'bold' : 'normal',
                                        "&:hover": {
                                            backgroundColor: 'iconColor.hover'
                                        }
                                    }}
                                >
                                    Resume
                                </Button>
                            </Link>
                        </Box> 

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 1,
                                borderRadius: '15px',
                                borderStyle: 'solid',
                                borderWidth: '2px',
                                borderColor: 'darkMode.background',
                                color: 'darkMode.icon',
                                cursor: 'pointer',
                                "&:hover": {
                                    bgcolor: 'darkMode.hover'
                                }
                            }}
                            size="small"
                            onClick={toggleDarkMode}
                        >
                            {isDarkMode ? <LightModeOutlined /> : <DarkModeOutlined />}
                        </Box> 
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default NavBar
