import { CardContent, Card, Button, CardActions } from '@mui/material';
import React from 'react';

const BoxesContainer3 = () => {
    return (
        <div>
            <div className="cont3">
                <img src="/images/home_recipes2_sectionbg1.jpg" />
            </div>
            <div className="other-recipes">

                <Card className="other-recipes-box">
                    {/* <img src="/images/back-g-home_recipes2.jpg" /> */}
                    <CardContent className="other-recipes-box-content">
                        {/* <img src="/images/back-g-home_recipes2.jpg" /> */}
                        <h6>check this</h6>
                        <h2>Other recipes</h2>
                        <CardActions spacing={2} direction="row">

                            <Button variant="contained" sx={{ background: '#20c05c' }}>Show all</Button>

                        </CardActions>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default BoxesContainer3