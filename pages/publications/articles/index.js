import { Circle } from "@mui/icons-material";
import {
    Box,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import React from "react";
import PageLayout from "../../../components/layout/PageLayout";
import { articles } from "../../../siteInfo";

const index = () => {
    return (
        <PageLayout name="Articles">
            <Container maxWidth="md">
                <List className="section">
                    {articles.map((article, index) => {
                        return (
                            <ListItem
                                key={index}
                                secondaryAction={
                                    <ListItemText
                                        edge="end"
                                        aria-label="delete"
                                    >
                                        {article.date}
                                    </ListItemText>
                                }
                            >
                                <ListItemIcon>
                                    <Circle sx={{ fontSize: ".5rem" }} />
                                </ListItemIcon>
                                <ListItemText
                                    sx={{
                                        "&:hover": {
                                            textDecoration: "underline",
                                        },
                                    }}
                                >
                                    <Link href={article.href}>
                                        {article.title}
                                    </Link>
                                </ListItemText>
                            </ListItem>
                        );
                    })}
                </List>
            </Container>
        </PageLayout>
    );
};

export default index;
