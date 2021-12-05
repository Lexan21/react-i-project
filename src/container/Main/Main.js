import React from "react";
import BoxesContainer from "../../components/Boxes/BoxesContainer";
import { Container } from "@mui/material";
// , my: '2px', px: '0', mx: '0'
// 
const Main = () => {
    return (
        <Container maxWidth="lg" sx={{ width: '100%' }}>
            <BoxesContainer />
        </Container>
    )
}

export default Main