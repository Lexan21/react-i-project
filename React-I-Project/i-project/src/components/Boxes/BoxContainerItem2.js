import React from 'react'
import Grid from '@mui/material/Grid';
import './BoxContainerItem.css'
import BoxCotainerItem2_1 from './BoxCotainerItem2_1'
import BoxArray from './BoxArray';
// import { ProductionQuantityLimits } from '@mui/icons-material';

// className = "table-two-row1"

const BoxCotainerItem2 = () => {
    return (
        <>
            <div>
                <h2>
                    What`s new on our table
                </h2>
                <p>Do you want to see more? </p>
            </div>
            <Grid
                container
                direction="row"
                justifyContent="space-eve"
                alignItems="center"
                spacing={1}
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    mx: 0,
                    my: 'auto',
                    px: 0,
                    cololr: '#222223'

                }}
            >
                {BoxArray.map(({ id, image, name, description }) => (
                    <Grid item xs={4} key={id} >
                        <BoxCotainerItem2_1
                            image={image}
                            name={name}
                            description={description}
                        />
                    </Grid>
                ))}


            </Grid>
        </>
    )
}

export default BoxCotainerItem2