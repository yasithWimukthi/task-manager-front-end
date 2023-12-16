import React from 'react';
import {Button, Chip, Stack} from "@mui/material";
import './Task.css';
import {ChipGenerator} from "../../helper/HelperMethods";

const Task = ({name, description, priority}) => {
    return (
        <div className="card">
            <div className="card-body">
                {ChipGenerator(priority)}
                <h4>
                    {name}
                </h4>
                <p>
                    {description}
                </p>
                <div className="button-container ">
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" color="success">
                            Update
                        </Button>
                        <Button variant="contained" color="error">
                            Delete
                        </Button>
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default Task;