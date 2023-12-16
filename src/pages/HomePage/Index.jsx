import React, {useEffect, useState} from "react";
import {Button, Container, Grid} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import axios from "../../config/axiosConfig";
import Swal from 'sweetalert2';
import TaskForm from "../../components/TaskForm/TaskForm";
import Task from "../../components/Task/Task";
import './HomePage.css';

const HomePage = () => {
    const [isAddTaskFormOpen, setIsAddTaskFormOpen] = useState(false);
    const [todoTasks, setTodoTasks] = useState([]);
    const [inProgressTasks, setInProgressTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const handleAddTaskFormOpen = () => {
        setIsAddTaskFormOpen(true);
    };

    const handleAddTaskFormClose = () => {
        setIsAddTaskFormOpen(false);
    };

    const handleTaskFormSubmit = (values,formik) => {
        console.log(values);
        axios.post('/tasks', values)
            .then(response => {
                Swal.fire({
                    icon: "success",
                    title: "Task added successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                formik.resetForm();
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.response.data.message,
                });
            });
    }

    useEffect(() => {
        axios.get('/tasks')
            .then(response => {
                setTodoTasks(()=>response.data.filter(task => task.status === 'TODO'));
                setInProgressTasks(()=>response.data.filter(task => task.status === 'IN_PROGRESS'));
                setCompletedTasks(()=>response.data.filter(task => task.status === 'COMPLETED'));
            })
            .catch(error => {
                console.log(error);
            });
    },[handleTaskFormSubmit]);


    return (
        <div>
            <h1>To do list</h1>
            <TaskForm
                title="Add Task"
                open={isAddTaskFormOpen}
                onClose={handleAddTaskFormClose}
                onSubmit={handleTaskFormSubmit}
            />
            <Container maxWidth="xl" className="task-container">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <p>Todo</p>
                        {
                            todoTasks && todoTasks.length >0 && todoTasks.map(task => {
                                return (
                                    <Task
                                        key={task.id}
                                        name={task.name}
                                        description={task.description}
                                        priority={task.priority}
                                    />
                                )
                            })
                        }
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <p>In Progress</p>
                        {
                            inProgressTasks && inProgressTasks.length >0 && inProgressTasks.map(task => {
                                return (
                                    <Task
                                        key={task.id}
                                        name={task.name}
                                        description={task.description}
                                        priority={task.priority}
                                    />
                                )
                            })
                        }
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <p>Completed</p>
                        {
                            completedTasks && completedTasks.length >0 && completedTasks.map(task => {
                                return (
                                    <Task
                                        key={task.id}
                                        name={task.name}
                                        description={task.description}
                                        priority={task.priority}
                                    />
                                )
                            })
                        }
                    </Grid>
                </Grid>
                <Button
                    className="add-btn"
                    color="success"
                    variant="contained"
                    endIcon={<AddIcon/>}
                    style={{borderRadius:'50%',width:'100px',height:'100px'}}
                    onClick={handleAddTaskFormOpen}>
                </Button>
            </Container>
        </div>
    );
}

export default HomePage;