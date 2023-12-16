import React, {useState} from "react";
import './HomePage.css';
import {Button, Container} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import TaskForm from "../../components/TaskForm/TaskForm";

const HomePage = () => {
    const [isAddTaskFormOpen, setIsAddTaskFormOpen] = useState(false);

    const handleAddTaskFormOpen = () => {
        setIsAddTaskFormOpen(true);
    };

    const handleAddTaskFormClose = () => {
        setIsAddTaskFormOpen(false);
    };

    return (
        <div>
            <h1>To do list</h1>
            <TaskForm
                title="Add Task"
                open={isAddTaskFormOpen}
                onClose={handleAddTaskFormClose}
                onSubmit={handleAddTaskFormClose}
            />
            <Container maxWidth="xl" className="task-container">
                <Button
                    className="add-btn"
                    color="success"
                    variant="contained"
                    endIcon={<AddIcon />}
                    style={{borderRadius:'50%',width:'100px',height:'100px'}}
                    onClick={handleAddTaskFormOpen}>
                </Button>
            </Container>
        </div>
    );
}

export default HomePage;