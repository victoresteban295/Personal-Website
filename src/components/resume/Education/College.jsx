import { AccountBalance, School } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";

const College = ({ index, college, city, degree, minor, graduation }) => {

    return (
        <Box
            id="school-section"
            sx={{
                mt: 1,
                mb: 1.5,
            }}
        >
            <Box
                id="title-subsection"
                sx={{
                    display: 'flex',
                }}
            >
                <Avatar
                    sx={{
                        color: 'iconColor.icon',
                        backgroundColor: 'iconColor.background',
                        borderRadius: '50px',
                        borderStyle: 'solid',
                        borderWidth: '2px',
                        borderColor: 'iconColor.icon',
                        mr: 2,
                    }}
                >
                    {index === "0" ? <AccountBalance /> : <School />}
                </Avatar>
                <Box
                    id="schoolinfo-subsection" 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
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
                        {`${college} | ${city}`}
                    </Typography> 
                    <Typography
                        varitant='body1'
                        sx={{
                            my: 0,
                            py: 0,
                        }}
                    >
                        {degree}
                    </Typography> 
                    {minor.trim() != '' && (
                        <Typography
                            varitant='body1'
                            sx={{
                                my: 0,
                                py: 0,
                            }}
                        >
                            {minor}
                        </Typography> 
                    )}
                    <Typography
                        varitant='body2'
                        sx={{
                            my: 0,
                            py: 0,
                        }}
                    >
                        {graduation}
                    </Typography> 
                </Box>
            </Box> 
        </Box>
    )
}

export default College;
