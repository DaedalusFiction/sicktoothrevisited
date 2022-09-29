import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const PoemPreview = ({ poem }) => {
    const [ratio, setRatio] = useState(1 / 1); // default to 16:9
    console.log(poem);
    return (
        <Box>
            <Image
                src={poem.URLs[0]}
                blurDataURL={poem}
                placeholder="blur"
                //has to be unoptimized to work with firebase storage, apparently
                unoptimized
                width="100"
                height={100 / ratio}
                onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                    setRatio(naturalWidth / naturalHeight)
                }
                layout="responsive"
                alt={poem.description}
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
                <Typography variant="h4">Title of Poem Selection</Typography>
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

export default PoemPreview;
