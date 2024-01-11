import { Box, Stack } from "@mui/material";
import Introduction from "./Introduction";
import Image from 'next/image'

const HomeSection = ({ isDarkMode, homeRef }) => {
    return (
        <Box
            sx={{
                py: '70px',
                mt: '64px',
                mx: 5,
            }}
        >
            <Stack
                id = "home-page"
                ref={homeRef}
                spacing={4}
                direction={{xs: 'column-reverse', sm: 'column-reverse', md: 'row'}}
                sx={{
                }}
            >
                <Introduction />
                <Box
                    sx={{
                        maxWidth: '500px',
                        maxHeight: '500px',
                        display: {xs: 'none', sm: 'none', md: 'block'},
                    }}
                >
                    {isDarkMode && (
                        <Image 
                            src={'images/WhiteLaptop.svg'}
                            alt={"Laptop"} 
                            height={500}
                            width={500}
                            style={{
                                maxWidth: '100%',
                            }}
                        />
                    )}
                    {!isDarkMode && (
                        <Image 
                            src={'images/BlackLaptop.svg'}
                            alt={"Laptop"} 
                            height={500}
                            width={500}
                            style={{
                                maxWidth: '100%',
                            }}
                        />
                    )}
                </Box>
                <Box
                    sx={{
                        maxWidth: '250px',
                        maxHeight: '250px',
                        alignSelf: 'center',
                        display: {xs: 'block', sm: 'block', md: 'none'},
                    }}
                >
                    {isDarkMode && (
                        <Image 
                            src={'images/WhiteLaptop.svg'}
                            alt={"Laptop"} 
                            height={250}
                            width={250}
                            style={{
                                maxWidth: '100%',
                            }}
                        />
                    )}
                    {!isDarkMode && (
                        <Image 
                            src={'images/BlackLaptop.svg'}
                            alt={"Laptop"} 
                            height={250}
                            width={250}
                            style={{
                                maxWidth: '100%',
                            }}
                        />
                    )}
                </Box>
            </Stack>
        </Box>
    )
}

export default HomeSection;
