import { Box, Stack } from "@mui/material";
import Introduction from "./Introduction";
import Image from 'next/image'

const HomeSection = ({ isDarkMode }) => {
    return (
        <Stack
            id = "home-page"
            spacing={4}
            direction={{xs: 'column-reverse', sm: 'column-reverse', md: 'row'}}
            sx={{
                my: { xs: 2, sm: 5, md: 10 },
                mx: 5,
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
    )
}

export default HomeSection;
