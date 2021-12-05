import { CardActions, styles, Card, CardContent } from '@mui/material'
import React from 'react'
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import BackgroundImage from "react-background-image";
// import placeholder from "./Img/b-g-welcom.jpg";


// style="width:100%"
// sx:{{ background='#20c05c' }}
// // 
const BoxCotainerItem = () => {
    return (

        <div className="wlc">
            <div className="img-welcome">
                <img src='/images/b-g-welcom.jpg' />
            </div>
            <div className="welcom" >
                {/* <BackgroundImage
                placeholder={placeholder}> */}

                <Card>
                    <CardContent className="welcom-box">

                        <div>welcome</div>
                        <h2>Easy recipes<br />
                            for any occasion</h2>
                        <p>Sed ultrices nisl velit eu ornare est ullamcorper a. <br />Nunc quis nibh magna.Proin risus
                            erat, fringilla vel <br /> purus sit amet, mattis porta enim.Duis fermentum <br /> faucibus est.
                        </p>
                        <CardActions spacing={2} direction="row">

                            <Button variant="contained" sx={{ background: '#20c05c' }}>About us</Button>
                            <Button variant="contained" color="inherit"  >Our cattering</Button>
                        </CardActions>
                    </CardContent>
                </Card >

                {/* </BackgroundImage> */}
            </ div >
        </div>


    )
}

export default BoxCotainerItem