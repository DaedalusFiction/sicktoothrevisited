import { Box, Divider, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import { collection, getDocs, query, where } from "firebase/firestore";
import PoemPreview from "../components/home/PoemPreview";
import StoryPreview from "../components/home/StoryPreview";
import ArticlePreview from "../components/home/ArticlePreview";
import { db } from "../firebase";

export default function Home({ poems }) {
    return (
        <Container maxWidth="xl" sx={{ paddingTop: "8rem" }}>
            <Grid container>
                <Grid item xs={12} md={2.5}>
                    {poems &&
                        poems.map((poem, index) => {
                            return <PoemPreview poem={poem} key={index} />;
                        })}
                </Grid>
                <Grid item xs={12} md={0.5}>
                    <Box
                        sx={{
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Divider orientation="vertical" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    {poems &&
                        poems.map((poem, index) => {
                            return <StoryPreview story={poem} key={index} />;
                        })}
                </Grid>
                <Grid item xs={12} md={0.5}>
                    <Box
                        sx={{
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Divider orientation="vertical" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={2.5}>
                    <Typography variant="h5">
                        Articles and Editorials
                    </Typography>
                    <Divider sx={{ margin: ".5rem 0 1rem 0" }} />
                    {poems &&
                        poems.map((poem, index) => {
                            return (
                                <ArticlePreview article={poem} key={index} />
                            );
                        })}
                </Grid>
            </Grid>
        </Container>
    );
}

export const getStaticProps = async (context) => {
    const poemsRef = collection(db, "gallery");
    const q1 = query(
        poemsRef,

        where("categories", "array-contains", "animals")
    );

    const queriedDocuments = await getDocs(q1);
    let poems = [];
    queriedDocuments.docs.forEach((doc, index) => {
        poems = [...poems, doc.data()];
    });

    return {
        props: {
            poems,
        },
    };
};
