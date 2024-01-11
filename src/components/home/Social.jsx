import { GitHub, LinkedIn } from "@mui/icons-material";
import { Stack, Tooltip, Avatar } from "@mui/material"
import Link from "next/link";

const Social = () => {
    return (
        <Stack
            direction='row'
            spacing={2}
            justifyContent={{xs: 'center', sm: 'flex-start'}} 
        >
            <Link
                href='https://www.linkedin.com/in/victor-esteban295'
                rel='noopener noreferrer'
                target='_blank'
                style={{textDecoration: 'none'}}
            >
                <Tooltip
                    arrow
                    placement="bottom"
                    title="LinkedIn"
                >
                    <Avatar
                        sx={{
                            color: 'iconColor.icon',
                            backgroundColor: 'iconColor.background',
                            borderRadius: '50px',
                            borderStyle: 'solid',
                            borderWidth: '2px',
                            borderColor: 'iconColor.icon',
                        }}
                    >
                        <LinkedIn />
                    </Avatar>
                </Tooltip>
            </Link>
            <Link
                href='https://www.github.com/victoresteban295'
                rel='noopener noreferrer'
                target='_blank'
                style={{textDecoration: 'none'}}
            >
                <Tooltip
                    arrow
                    placement="bottom"
                    title="GitHub"
                >
                    <Avatar
                        sx={{
                            color: 'iconColor.icon',
                            backgroundColor: 'iconColor.background',
                            borderRadius: '50px',
                            borderStyle: 'solid',
                            borderWidth: '2px',
                            borderColor: 'iconColor.icon',
                        }}
                    >
                        <GitHub />
                    </Avatar>
                </Tooltip>
            </Link>
        </Stack>
    )
}

export default Social
