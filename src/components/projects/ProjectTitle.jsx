import { Stack, Typography } from "@mui/material";
import Link from "next/link";

const ProjectTitle = ({ title }) => {

    return (
        <Stack
            direction='row'
            spacing={2}
        >
            <Link
                href='/projects'
                style={{textDecoration: 'none'}}
            >
                <Typography
                    variant='h5'
                    sx={{
                        fontWeight: '700',
                        color: 'text.primary',
                        "&:hover": {
                            textDecoration: 'underline'
                        }
                    }}
                >
                    Projects
                </Typography>
            </Link>
            <Typography
                variant='h5'
                sx={{
                    fontWeight: '700',
                }}
            >
                {'>'}
            </Typography>
            <Typography
                variant='h5'
                sx={{
                    fontWeight: '700',
                    color: '#eb5e28',
                }}
            >
                {title}
            </Typography>
        </Stack>
    )
}

export default ProjectTitle;
