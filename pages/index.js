import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import { collection, getDocs, query, where } from "firebase/firestore";
import PoemPreview from "../components/home/PoemPreview";
import { db } from "../firebase";

export default function Home({ poems }) {
    return (
        <Container maxWidth="xl" sx={{ paddingTop: "8rem" }}>
            <Grid container>
                <Grid item xs={12} md={3}>
                    {poems &&
                        poems.map((poem, index) => {
                            return <PoemPreview poem={poem} key={index} />;
                        })}
                </Grid>
                <Grid item xs={12} md={6}></Grid>
                <Grid item xs={12} md={3}></Grid>
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
