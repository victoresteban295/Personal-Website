import { Typography, Box, List, ListItem } from "@mui/material"

const Work = () => {
    return (
        <Box
            id="work-section"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                width: '100%',
                py: 1,
                px: 3,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        borderBottom: '4px solid',
                        my: 1,
                        fontWeight: 'bold',
                    }}
                >
                    Work Experience
                </Typography> 
            </Box>
            <Box
                id="work01-subsection"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    mt: 1,
                }}
            >
                <Typography
                    varitant='h5'
                    sx={{
                        fontWeight: 'bold',
                        my: 0,
                        py: 0,
                    }}
                >
                    Online Digital Shopper | Walmart 
                </Typography> 
                <Typography
                    varitant='body1'
                    sx={{
                        my: 0,
                        py: 0,
                    }}
                >
                    Sept 2022 - Jan 2023
                </Typography> 
                <List
                    sx={{
                        listStyleType: 'disc',
                        my: 0,
                        pl: 4,
                    }}
                >
                    <ListItem
                        sx={{
                            display: 'list-item',
                            p: 0,
                        }}
                    >
                        <Typography
                            variant='body1'
                        >
                            {"Prep customers' online orders by locating the items in the store."}
                        </Typography>
                    </ListItem>                 
                    <ListItem
                        sx={{
                            display: 'list-item',
                            p: 0,
                        }}
                    >
                        <Typography
                            variant='body1'
                        >
                            {"Package and organize customers' orders to guarantee efficient distribution during pick up."}
                        </Typography>
                    </ListItem>                 
                    <ListItem
                        sx={{
                            display: 'list-item',
                            p: 0,
                        }}
                    >
                        <Typography
                            variant='body1'
                        >
                            Continuous routine checks to ensure quality and accuracy.
                        </Typography>
                    </ListItem>                 
                    <ListItem
                        sx={{
                            display: 'list-item',
                            p: 0,
                        }}
                    >
                        <Typography
                            variant='body1'
                        >
                            Make appropriate product substitutions and communicate with customers to satisfy their needs.
                        </Typography>
                    </ListItem>                 
                    <ListItem
                        sx={{
                            display: 'list-item',
                            p: 0,
                        }}
                    >
                        <Typography
                            variant='body1'
                        >
                            Monitor checked-in customers and dispense their orders as they arrive.
                        </Typography>
                    </ListItem>                 
                </List>
            </Box>
        </Box>
    )
}

export default Work;
