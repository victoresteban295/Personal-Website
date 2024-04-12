import { Box, List, ListItem, Typography } from "@mui/material";

const Jobs = ({ company, jobTitle, startDate, endDate, description }) => {
    return (
        <Box
            id="work-subsection"
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
                {`${jobTitle} | ${company}`}
            </Typography> 
            <Typography
                varitant='body1'
                sx={{
                    my: 0,
                    py: 0,
                }}
            >
                {`${startDate} - ${endDate}`}
            </Typography> 
            <List
                sx={{
                    listStyleType: 'disc',
                    my: 0,
                    pl: 4,
                }}
            >
                {description.map(item => {
                    return (
                        <ListItem
                            key={item}
                            sx={{
                                display: 'list-item',
                                p: 0,
                            }}
                        >
                            <Typography
                                variant='body1'
                            >
                                {item}
                            </Typography>
                        </ListItem>                 
                    )
                })}
            </List>
        </Box>
    )
}

export default Jobs;
