import React from "react";
import './HomePage.css';
import {Button, Container} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const HomePage = () => {
    return (
        <div>
            <h1>To do list</h1>
            <Container maxWidth="xl" className="task-container">
                <Button className="add-btn" color="success" variant="contained" endIcon={<AddIcon />} style={{borderRadius:'50%',width:'100px',height:'100px'}}></Button>
            </Container>
        </div>
    );
}

export default HomePage;