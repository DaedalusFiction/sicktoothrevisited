import { Box } from "@mui/material";
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
        </Box>
    );
};

export default PoemPreview;
