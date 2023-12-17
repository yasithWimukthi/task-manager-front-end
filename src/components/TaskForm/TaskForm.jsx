import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {
    Box, Button, Dialog, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField
} from '@mui/material';

const validationSchema = Yup.object({
    description: Yup.string().required('Description is required.'),
    name: Yup.string().required('Name is required.'),
    priority: Yup.string().required('Priority is required.'),
    status: Yup.string().required('Status is required.'),
});

const TaskForm = ({task = {
                          description: '', name: '', priority: '', status: '',
                      },
                      title,
                      buttonText = "Create",
                      open,
                      onClose,
                      onSubmit
                  }) => {

    const formik = useFormik({
        initialValues: {
            description: task.description,
            name: task.name,
            priority: task.priority,
            status: task.status,
        },
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            onSubmit(values, formik);
            onClose();
        },
    });

    return (<Dialog open={open} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Task Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        id="description"
                        name="description"
                        label="Description"
                        multiline
                        rows={4}
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                        margin="normal"
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="status-label">Status</InputLabel>
                        <Select
                            labelId="status-label"
                            id="status"
                            name="status"
                            value={formik.values.status}
                            onChange={formik.handleChange}
                            error={formik.touched.status && Boolean(formik.errors.status)}
                        >
                            <MenuItem value="TODO">Todo</MenuItem>
                            <MenuItem value="IN_PROGRESS">In Progress</MenuItem>
                            <MenuItem value="COMPLETED">Completed</MenuItem>
                        </Select>
                    </FormControl>
                    <p className="form-error">{formik.touched.status && Boolean(formik.errors.status) ? formik.errors.status : null}</p>

                    <FormControl fullWidth margin="normal">
                        <InputLabel id="priority-label">Priority</InputLabel>
                        <Select
                            labelId="priority-label"
                            id="priority"
                            name="priority"
                            value={formik.values.priority}
                            onChange={formik.handleChange}
                            error={formik.touched.priority && Boolean(formik.errors.priority)}
                        >
                            <MenuItem value="LOW">Low</MenuItem>
                            <MenuItem value="MEDIUM">Medium</MenuItem>
                            <MenuItem value="HIGH">High</MenuItem>
                        </Select>
                    </FormControl>
                    <p className="form-error">{formik.touched.priority && Boolean(formik.errors.priority) ? formik.errors.priority : null}</p>

                    <Box mt={2}>
                        <Button variant="contained" color="primary" type="submit">
                            {buttonText}
                        </Button>
                    </Box>
                </form>
            </DialogContent>
        </Dialog>);
};

export default TaskForm;