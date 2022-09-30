import { Box, Divider, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const ArticlePreview = ({ article }) => {
    const articleHref = "/publications/articles/" + article.fields[0].value;
    const authorHref = "/contributors/" + article.fields[1].value;
    return (
        <Box>
            <Box
                sx={{
                    margin: ".5rem 0",
                }}
            >
                <Box sx={{ display: "flex", gap: ".25em" }}>
                    {article.subCategories.map((subCategory, index) => {
                        return (
                            <Typography key={index} variant="caption">
                                [{subCategory}]
                            </Typography>
                        );
                    })}
                </Box>
                <Typography
                    variant="h4"
                    className="link"
                    sx={{ fontSize: "1.5rem", textTransform: "uppercase" }}
                >
                    <Link href={articleHref}>{article.fields[0].value}</Link>
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ margin: ".25rem 0", fontSize: "1rem" }}
                >
                    {article.fields[2].value}
                </Typography>
                <Typography className="link" variant="h6">
                    <Link href={authorHref}>{article.fields[1].value}</Link>
                </Typography>
            </Box>
            <Divider variant="inset" sx={{ margin: "1rem 0 1.5rem 0" }} />
        </Box>
    );
};

export default ArticlePreview;
