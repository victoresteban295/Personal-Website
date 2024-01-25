"use client"
import Link from 'next/link'
import { AppBar, Toolbar, Container, Box, Button, IconButton, Menu, MenuItem} from '@mui/material'
import {HomeOutlined, IntegrationInstructionsOutlined, ArticleOutlined, LightModeOutlined, DarkModeOutlined} from '@mui/icons-material'
import {Home, IntegrationInstructions, Article } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'

const NavBar = ({ isDarkMode, toggleDarkMode, isHomeVisible, isProjectsVisible, isResumeVisible }) => {

    /* Use to Determine Active Page For Navigation */

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
        <Box sx={{position: 'fixed', top: '0px', zIndex: '999', }}>
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
                                        backgroundColor: 'primary.main'
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
                                            startIcon={isHomeVisible === true ? <Home /> : <HomeOutlined />}
                                            sx = {{
                                                color: 'text.primary',
                                                fontWeight: isHomeVisible ? 'bold' : 'normal',
                                                "&:hover": {
                                                    backgroundColor: 'primary.main',
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
                                            startIcon={(!isHomeVisible && isProjectsVisible) ? <IntegrationInstructions /> : <IntegrationInstructionsOutlined />} 
                                            sx = {{
                                                color: 'text.primary',
                                                fontWeight: (!isHomeVisible && isProjectsVisible) ? 'bold' : 'normal',
                                                "&:hover": {
                                                    backgroundColor: 'primary.main',
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
                                            startIcon={(!isProjectsVisible && isResumeVisible) ? <Article /> : <ArticleOutlined />} 
                                            sx = {{
                                                color: 'text.primary',
                                                fontWeight: (!isProjectsVisible && isResumeVisible) ? 'bold' : 'normal',
                                                "&:hover": {
                                                    backgroundColor: 'primary.main',
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
                                    startIcon={isHomeVisible === true ? <Home /> : <HomeOutlined />}
                                    sx = {{
                                        color: 'text.primary',
                                        fontWeight: isHomeVisible ? 'bold' : 'normal',
                                        "&:hover": {
                                            backgroundColor: 'primary.main',
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
                                    startIcon={(!isHomeVisible && isProjectsVisible) ? <IntegrationInstructions /> : <IntegrationInstructionsOutlined />} 
                                    sx = {{
                                        color: 'text.primary',
                                        fontWeight: (!isHomeVisible && isProjectsVisible) ? 'bold' : 'normal',
                                        "&:hover": {
                                            backgroundColor: 'primary.main',
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
                                    startIcon={(!isProjectsVisible && isResumeVisible) ? <Article /> : <ArticleOutlined />} 
                                    sx = {{
                                        color: 'text.primary',
                                        fontWeight: (!isProjectsVisible && isResumeVisible) ? 'bold' : 'normal',
                                        "&:hover": {
                                            backgroundColor: 'primary.main',
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
                                    backgroundColor: 'primary.main'
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
