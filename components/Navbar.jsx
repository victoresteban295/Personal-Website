import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import {Typography, AppBar, CssBaseline, Toolbar, Container, Box, Button, IconButton, Menu, MenuItem} from '@mui/material'
import {HomeOutlined, IntegrationInstructionsOutlined, ArticleOutlined} from '@mui/icons-material'
import {Home, IntegrationInstructions, Article, DarkMode, LightMode} from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'

const NavBar = () => {

    /* Use to Determine Active Page For Navigation */
    const router = useRouter();
    const currentRoute = router.pathname; // Current Path 

    /* Hamburger Menu Config */
    const [anchorEl, setAnchorEl] = React.useState(null); // State: Determine HTML Element that Menu will Attach To
    const open = Boolean(anchorEl); // If Parameter is an object -> true, else null -> false boolean value
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget); // Menu attaches to HTML Element that's triggering event 
    };
    const handleClose = () => {
        setAnchorEl(null); // Menu has no HTML Element to attach to
    };


    return (
        <Box sx={{ flexGrow: 1, position: 'sticky', top: '0px', zIndex: '999' }}>
            <AppBar position='sticky' >
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
                                    color: 'text.primary',
                                    "&:hover": {
                                        backgroundColor: 'iconColor.hover'
                                    }
                                }}
                            >
                                <MenuIcon fontSize='large' />
                            </IconButton>    
                            <Menu 
                                id="hamburger-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                /* sx={{ */
                                /*     "& .MuiPaper-root" : { */
                                /*         backgroundColor: 'black' */
                                /*     } */
                                /* }} */
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
                                    <Link href='/' style={{textDecoration: 'none'}}>
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
                                    <Link href='/Project' style={{textDecoration: 'none'}}>
                                        <Button 
                                            variant='text' 
                                            startIcon={currentRoute === '/Project' ? <IntegrationInstructions /> : <IntegrationInstructionsOutlined />} 
                                            sx = {{
                                                color: 'text.primary',
                                                fontWeight: currentRoute === '/Project' ? 'bold' : 'normal',
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
                                    <Link href='/Resume' style={{textDecoration: 'none'}}>
                                        <Button 
                                            variant='text' 
                                            startIcon={currentRoute === '/Resume' ? <Article /> : <ArticleOutlined />} 
                                            sx = {{
                                                color: 'text.primary',
                                                fontWeight: currentRoute === '/Resume' ? 'bold' : 'normal',
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
                            <Link href='/' style={{textDecoration: 'none'}}>
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
                            <Link href='/Project' style={{textDecoration: 'none'}}>
                                <Button 
                                    variant='text' 
                                    startIcon={currentRoute === '/Project' ? <IntegrationInstructions /> : <IntegrationInstructionsOutlined />} 
                                    sx = {{
                                        color: 'text.primary',
                                        fontWeight: currentRoute === '/Project' ? 'bold' : 'normal',
                                        "&:hover": {
                                            backgroundColor: 'iconColor.hover'
                                        }
                                    }}
                                >
                                    Projects
                                </Button>
                            </Link>

                            {/* Navigation Button: Resume */}
                            <Link href='/Resume' style={{textDecoration: 'none'}}>
                                <Button 
                                    variant='text' 
                                    startIcon={currentRoute === '/Resume' ? <Article /> : <ArticleOutlined />} 
                                    sx = {{
                                        color: 'text.primary',
                                        fontWeight: currentRoute === '/Resume' ? 'bold' : 'normal',
                                        "&:hover": {
                                            backgroundColor: 'iconColor.hover'
                                        }
                                    }}
                                >
                                    Resume
                                </Button>
                            </Link>
                        </Box> 

                        <IconButton 
                            sx={{
                                color: '#403d39',
                                backgroundColor: '#fffcf2',
                                "&:hover": {
                                    color: 'yellow'
                                }
                            }}
                            size="small"
                        >
                            <LightMode />
                        </IconButton> 
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default NavBar
