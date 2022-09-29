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
                    margin: ".5rem 0",
                }}
            >
                <Box sx={{ display: "flex", gap: ".25em" }}>
                    {poem.subCategories.map((subCategory, index) => {
                        return (
                            <Typography key={index} variant="caption">
                                [{subCategory}]
                            </Typography>
                        );
                    })}
                </Box>

                <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
                    {poem.fields[0].value}
                </Typography>
                <Typography variant="body2" sx={{ margin: ".25rem 0" }}>
                    {poem.fields[2].value}
                </Typography>
                <Typography variant="h6">By {poem.fields[1].value}</Typography>
            </Box>
            <Divider variant="inset" sx={{ margin: "1rem 0 1.5rem 0" }} />
        </Box>
    );
};

export default PoemPreview;
