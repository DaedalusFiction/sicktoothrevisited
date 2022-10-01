import { Divider, Fade, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { collection, getDocs, query, where } from "firebase/firestore";
import Image from "next/image";
import React, { useState } from "react";
import ArticlePreview from "../../../components/home/ArticlePreview";
import StoryPreview from "../../../components/home/StoryPreview";
import PageLayout from "../../../components/layout/PageLayout";
import { db } from "../../../firebase";

const index = ({ articles }) => {
    const [ratio, setRatio] = useState(1 / 1); // default to 16:9
    const [isLoaded, setIsLoaded] = useState(false);
    const handleLoaded = (naturalWidth, naturalHeight) => {
        setRatio(naturalWidth / naturalHeight);
        setIsLoaded(true);
    };
    return (
        <PageLayout name="Articles">
            <Container maxWidth="xl">
                <Grid className="section" container spacing={3}>
                    {articles.length > 0 &&
                        articles.map((article, index) => {
                            return (
                                <Grid key={index} item xs={3}>
                                    <Fade in={isLoaded}>
                                        <div>
                                            <Image
                                                className="link link-image"
                                                src={article.URLs[0]}
                                                blurDataURL={article}
                                                placeholder="blur"
                                                //has to be unoptimized to work with firebase storage, apparently
                                                unoptimized
                                                width="100"
                                                height={100 / ratio}
                                                onLoadingComplete={({
                                                    naturalWidth,
                                                    naturalHeight,
                                                }) =>
                                                    handleLoaded(
                                                        naturalWidth,
                                                        naturalHeight
                                                    )
                                                }
                                                layout="responsive"
                                                alt={article.description}
                                            />
                                        </div>
                                    </Fade>
                                    <ArticlePreview item={article} />
                                </Grid>
                            );
                        })}
                </Grid>
            </Container>
        </PageLayout>
    );
};

export const getStaticProps = async (context) => {
    const publicationsRef = collection(db, "publications");
    const poetryQuery = query(
        publicationsRef,
        where("categories", "array-contains", "poetry")
    );
    const fictionQuery = query(
        publicationsRef,
        where("categories", "array-contains", "fiction")
    );
    const articlesQuery = query(
        publicationsRef,
        where("categories", "array-contains", "article")
    );

    const poetrySnapshot = await getDocs(poetryQuery);
    const fictionSnapshot = await getDocs(fictionQuery);
    const articlesSnapshot = await getDocs(articlesQuery);
    let poems = [];
    poetrySnapshot.docs.forEach((doc, index) => {
        poems = [...poems, doc.data()];
    });
    let fiction = [];
    fictionSnapshot.docs.forEach((doc, index) => {
        fiction = [...fiction, doc.data()];
    });
    let articles = [];
    articlesSnapshot.docs.forEach((doc, index) => {
        articles = [...articles, doc.data()];
    });

    return {
        props: {
            poems,
            fiction,
            articles,
        },
    };
};

export default index;
