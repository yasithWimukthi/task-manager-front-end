import React from "react";
import './HomePage.css';
import {Box, Container} from "@mui/material";

const HomePage = () => {
    return (
        <div>
            <h1>To do list</h1>
            <Container maxWidth="xl">
                <Box sx={{bgcolor: '#cfe8fc', height: '100vh'}}/>
            </Container>
        </div>
    );
}

export default HomePage;