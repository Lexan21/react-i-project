import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

// sx={{ background: '#1e1d26' }}
export default function ButtonAppBar() {
    return (
        <Stack spacing={2} direction="row" sx={{ background: '#1e1d26', margin: 5 }}>
            <Container maxWidth="lg" >
                <Box sx={{ flexGrow: 1 }}>

                    <AppBar position="static" sx={{ background: '#1e1d26' }} >
                        <Toolbar >
                            <IconButton
                                size="large"
                                edge="start"
                                // color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                News
                            </Typography>
                            <Button color="inherit" variant="outlined">Buy now</Button>
                        </Toolbar>
                    </AppBar>

                </Box >
            </Container>
        </Stack>
    );
}