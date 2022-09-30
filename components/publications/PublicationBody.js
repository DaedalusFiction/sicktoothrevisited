import { doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { marked } from "marked";
import { StepContext, Typography } from "@mui/material";

const PublicationBody = ({ story }) => {
    const [currentStory, setCurrentStory] = useState("null");

    useEffect(() => {
        async function getStory() {
            if (story) {
                const xhr = new XMLHttpRequest();
                xhr.responseType = "text";
                xhr.onload = (event) => {
                    let markdowntext = xhr.response;
                    if (markdowntext.charAt(0) === `"`) {
                        markdowntext = markdowntext.substring(1);
                    }
                    const newBody = marked.parse(markdowntext);
                    document.getElementById("storyBody").innerHTML = newBody;
                    setCurrentStory(newBody);
                };
                xhr.open("GET", story.markdownURL);
                xhr.send();
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        getStory();
    }, [story]);
    return (
        <div>
            <div id="storyBody"></div>
        </div>
    );
};

export default PublicationBody;
