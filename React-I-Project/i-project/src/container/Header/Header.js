import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Menu from '../../components/Menu/Menu.js'
import CartHeader from '../../components/CartHeader/CartHeader.js';




// import { styled } from '@mui/material/styles';
// import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles({
//     headerColor: { background: '#1e1d26', },


//component="div" })

// style={{ width: '100%' }}
// sx={{ m: 0, p: 0 }} 
// 
const Header = () => {

    console.log(Typography);
    return (

        < div style={{ width: '100%', m: 0 }}>

            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <AppBar position="static" sx={{ width: '100%', p: 1, background: '#1e1d26' }}>
                    <Container maxWidth="lg">
                        <Toolbar sx={{ px: 0, width: '100%', mx: 0, display: 'flex', justifyContent: 'center' }}>
                            <img className="logo" src='/images/Logo.png' />
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}

                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu sx={{ display: 'flex', flexDirection: 'row', }} />
                            <Box sx={{ mx: 2 }}>
                                <CartHeader />
                            </Box>
                            <Button component="span" variant="contained" sx={{ p: 1, background: '#20c05c', flexShrink: 1, mx: 2 }}
                            >Buy now</Button>


                        </Toolbar>
                    </Container>
                </AppBar>
            </Box >

        </div >
    );
}



export default Header