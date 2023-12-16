import { Chip} from "@mui/material";
import React from "react";

export const ChipGenerator = (priority) => {

    switch (priority) {
        case "LOW":
            return <Chip label="Low" color="primary" sx={{margin:1}}/>
        case "MEDIUM":
            return <Chip label="Medium" color="success" sx={{margin:1}}/>
        case "HIGH":
            return <Chip label="High" color="error" sx={{margin:1}}/>
        default:
            return <Chip label="Low" color="success" sx={{margin:1}}/>
    }
}