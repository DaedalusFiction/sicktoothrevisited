import { doc, getDoc } from "firebase/firestore";
import React from "react";
import PageLayout from "../../../components/layout/PageLayout";
import { db } from "../../../firebase";
const page = ({ story }) => {
    return <PageLayout name={story.fields[0].value}></PageLayout>;
};

export const getServerSideProps = async (context) => {
    const docSnap = await getDoc(doc(db, `publications/${context.params.id}`));
    let story = docSnap.data();

    return {
        props: {
            story,
        },
    };
};

export default page;
