import { Button, CardActions } from '@mui/material';
import React from 'react';
import BoxContainer4_1 from './BoxContainer4_1';
// className="button-1"
// className="button-2"
const BoxContainer4 = () => {
    return (
        <>
            <div className="natural-prod-img">
                <img src="/images/home_recipes2_sectionbg2.jpg" />
            </div>
            <div className="container">
                <div className="natural-products">
                    <div className="natural-products-box">
                        <div>about us</div>
                        <h2>Natural products and</h2>
                        <h2>aromatic spices</h2>
                        <p className="welcom-p">Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit
                            posuere. Nunc urna libero, congue porta nibn a, semper feugiat sem. Sed auctor dui eleifend, scelerisgue
                            eros ut, pellentesque nibh. Nam lacinia subscipit accumsan.
                        </p>
                        <CardActions spacing={2} direction="row">

                            <Button variant="contained" sx={{ background: '#20c05c' }}>About us</Button>

                            <Button variant="contained" color="inherit" >Our cattering</Button>
                        </CardActions>
                    </div>
                    <BoxContainer4_1 />
                </div>
            </div>
        </>
    )
}

export default BoxContainer4