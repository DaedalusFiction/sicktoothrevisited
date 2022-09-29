import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const ArticlePreview = () => {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".25rem",
                    margin: ".5rem 0",
                }}
            >
                <Typography variant="caption">[Editorial]</Typography>
                <Typography variant="h4" sx={{ fontSize: "1.5rem" }}>
                    Title of Poem Selection
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ margin: ".25rem 0", fontSize: "1rem" }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique dolores fugiat rerum quis voluptatem eligendi
                    facere minus fuga vel? Id!
                </Typography>
                <Typography variant="h6">By Writer Name</Typography>
            </Box>
            <Divider variant="inset" sx={{ margin: "1rem 0 1.5rem 0" }} />
        </Box>
    );
};

export default ArticlePreview;
