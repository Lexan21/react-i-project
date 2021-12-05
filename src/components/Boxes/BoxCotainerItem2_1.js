import React from "react";
import { Card, CardContent } from '@mui/material'
import PropTypes from 'prop-types'
// 

const BoxCotainerItem2_1 = ({ image, name, description }) => {
    return (
        <>
            {/* <Grid xs={4} md={6} sm={12}> */}
            <Card sx={{ p: 0 }}>

                <CardContent className="table-two-row1"  >
                    <div className="product-img"><img src={image} alt={name} /></div>
                    <p>{name}</p>
                    <div className="table-two-row1-1">
                        <text>{description}</text>
                    </div>
                </CardContent>

            </Card>

        </>
    )
}

BoxCotainerItem2_1.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
}

BoxCotainerItem2_1.defaultProps = {
    description: 'No description...',
}

export default BoxCotainerItem2_1