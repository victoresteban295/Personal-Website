"use client"
import { Box, Grow, Stack, SvgIcon } from "@mui/material"
import Introduction from '../components/home/Introduction'
import Aboutme from '../components/home/Aboutme'
import Social from '../components/home/Social'
import { usePathname } from 'next/navigation'
import Education from '../components/resume/Education'
import Introduction02 from '../components/home/Introduction02'
import Image from 'next/image'

const HomePage = () => {
    const pathname = usePathname();

    return (
        <Grow in={pathname === ('/')}>
            <Box
                id="page-section"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Stack
                    id = "home-page-section"
                    spacing={4}
                    direction={{xs: 'column-reverse', sm: 'column-reverse', md: 'row'}}
                    sx={{
                        my: { xs: 2, sm: 5, md: 10 },
                        mx: 5,
                    }}
                >
                    <Introduction02 />
                    <Box
                        sx={{
                            maxWidth: '500px',
                            maxHeight: '500px',
                            display: {xs: 'none', sm: 'none', md: 'block'},
                        }}
                    >
                        <Image 
                            src={'images/BlackLaptop.svg'}
                            alt={"Laptop"} 
                            height={500}
                            width={500}
                            style={{
                                maxWidth: '100%',
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            maxWidth: '250px',
                            maxHeight: '250px',
                            alignSelf: 'center',
                            display: {xs: 'block', sm: 'block', md: 'none'},
                        }}
                    >
                        <Image 
                            src={'images/BlackLaptop.svg'}
                            alt={"Laptop"} 
                            height={250}
                            width={250}
                            style={{
                                maxWidth: '100%',
                            }}
                        />
                    </Box>
                </Stack>
            </Box>
        </Grow>
    )
}

export default HomePage;
