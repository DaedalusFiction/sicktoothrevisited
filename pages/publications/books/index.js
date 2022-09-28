import { Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import PageLayout from "../../../components/layout/PageLayout";
import BookItem from "../../../components/publications/BookItem";
import { books } from "../../../siteInfo";

const index = () => {
    return (
        <PageLayout name="Books">
            <Container>
                {books.map((book, index) => {
                    return (
                        <Box key={index}>
                            <BookItem
                                book={book}
                                isReversed={index % 2 === 0}
                            />
                            <Divider
                                sx={{ maxWidth: "30rem", margin: "0 auto" }}
                            />
                        </Box>
                    );
                })}
            </Container>
        </PageLayout>
    );
};

export default index;
