import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const StoryPreview = ({ story }) => {
    const [ratio, setRatio] = useState(1 / 1); // default to 16:9
    console.log(story);
    return (
        <Box>
            <Image
                src={story.URLs[0]}
                blurDataURL={story}
                placeholder="blur"
                //has to be unoptimized to work with firebase storage, apparently
                unoptimized
                width="100"
                height={100 / ratio}
                onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                    setRatio(naturalWidth / naturalHeight)
                }
                layout="responsive"
                alt={story.description}
            />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".25rem",
                    margin: ".5rem 0",
                }}
            >
                <Typography variant="caption">[Fiction]</Typography>
                <Typography variant="h3">Title of story Selection</Typography>
                <Typography variant="body2" sx={{ margin: ".25rem 0" }}>
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

export default StoryPreview;
