import { Stack } from "@mui/material"
import Name from "./Name";
import Social from "./Social";
import Aboutme from "./Aboutme";

const Introduction = () => {
    return (
        <Stack
            spacing={2}
            sx={{
                textAlign: {xs: 'center', sm: 'left'},
                color: 'text.primary',
                maxWidth: '700px',
            }}
        >
            <Name />
            <Aboutme />
            <Social />
        </Stack>
    )
}

export default Introduction;
