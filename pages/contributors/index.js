import { Typography } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { db } from "../../firebase";

const index = ({ contributors }) => {
    return (
        <PageLayout name="Contributors">
            {contributors.map((contributor, index) => {
                return <Typography key={index}>{contributor.name}</Typography>;
            })}
        </PageLayout>
    );
};

export const getStaticProps = async (context) => {
    const contributorsRef = collection(db, "contributors");

    const contributorsSnapshot = await getDocs(contributorsRef);

    let contributors = [];
    contributorsSnapshot.docs.forEach((doc, index) => {
        contributors = [...contributors, doc.data()];
    });

    return {
        props: {
            contributors,
        },
    };
};

export default index;
