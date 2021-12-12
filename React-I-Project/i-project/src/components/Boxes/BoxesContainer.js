import React from 'react';
import { Grid, Typography } from "@mui/material";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import Box from '@mui/system/Box';
import BoxContaiverItem from './BoxContaiverItem';
import BoxCotainerItem2 from './BoxContainerItem2';
import BoxContainer3 from './BoxContainer3';
import BoxContainer4 from './BoxContainer4';
import BoxContainer5 from './BoxContainer5';
// import ImageList from '@mui/material/ImageList';


const BoxesContainer = () => {
    return (

        <Box sx={{ width: '100%', px: '0' }}>
            <Typography variant="h5" component="h1" align="center" >BoxesContainer</Typography >
            <AirplanemodeActiveIcon />

            <Grid container
                direction="column"
                justifyContent="space-evenly"
                alignItems="center"
                sx={{
                    width: '1102px',
                    p: 0,
                    m: 0
                }}>
                <Grid item xs={12} md={4} sm={6} >
                    <BoxContaiverItem />
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                    <BoxCotainerItem2 />
                </Grid>
                <Grid item xs={12} >
                    <BoxContainer3 />
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                    {/* <ImageList>
                        <img src='/images/home_recipes2_sectionbg2'> */}
                    <BoxContainer4 />
                    {/* </img>
                    </ImageList> */}
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                    <BoxContainer5 />
                </Grid>
            </Grid>
        </Box>



    )
}
export default BoxesContainer